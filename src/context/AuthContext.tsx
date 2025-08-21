// ** React Imports
import { createContext, useEffect, useState, ReactNode } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Axios

// ** Config
// import authConfig from "src/configs/auth";

// ** Types
import { AuthValuesType, LoginParams, ErrCallbackType, UserDataType, RegisterParams, GetTokenType } from '@/context/types'
import Swal from 'sweetalert2'
import toast from 'react-hot-toast'
import axios from 'axios'
import { getEndpoint, getMenuPath } from '@/utils/api/getApi'
import getEncodedKey from '@/utils/api/getEncodedKey'

// ** Defaults
const defaultProvider: AuthValuesType = {
    user: null,
    getToken: null,
    loading: true,
    setUser: () => null,
    setGetToken: () => null,
    setLoading: () => Boolean,
    login: () => Promise.resolve(),
    logout: () => Promise.resolve(),
    register: () => Promise.resolve()
}

const AuthContext = createContext(defaultProvider)

type Props = {
    children: ReactNode
}

const AuthProvider = ({ children }: Props) => {
    // ** States
    const [user, setUser] = useState<UserDataType | null>(defaultProvider.user)
    const [getToken, setGetToken] = useState<GetTokenType | null>(defaultProvider.getToken)
    const [loading, setLoading] = useState<boolean>(defaultProvider.loading)

    // ** Hooks
    const router = useRouter()

    useEffect(() => {
        const initAuth = async (): Promise<void> => {
            const storedToken = window.localStorage.getItem('accessToken')

            if (storedToken) {
                setLoading(true)
                try {
                    const response = await axios.get(getEndpoint('auth'), {
                        headers: {
                            Authorization: `Bearer ${storedToken}`,
                            'X-API-KEY': getEncodedKey(),
                            'X-MENU-PATH': getMenuPath()
                        }
                    })

                    if (response?.data?.data?.role_id !== 1) {
                        const responseToken = await axios.get(getEndpoint('get_token') + '/user', {
                            headers: {
                                Authorization: `Bearer ${storedToken}`,
                                'X-API-KEY': getEncodedKey(),
                                'X-MENU-PATH': getMenuPath()
                            }
                        })
                        setGetToken({ ...responseToken?.data })
                    }

                    setUser({ ...response.data })

                    localStorage.setItem('modules', JSON.stringify(response.data.menu))
                    // router.replace('/dashboards')
                    setLoading(false)
                } catch (error) {
                    localStorage.removeItem('userData')
                    localStorage.removeItem('refreshToken')
                    localStorage.removeItem('accessToken')
                    localStorage.removeItem('menuPath')
                    setUser(null)
                    if (!router.pathname.includes('/login')) {
                        router.replace('/login') // Redirect to /login page
                    }
                    setLoading(false)
                }
            } else {
                setLoading(false)
            }
        }

        initAuth()
    }, [router])

    const handleResendVerificationEmail = async (email: string) => {
        try {
            await axios.post(
                getEndpoint('resendVerification'),
                { email },
                {
                    headers: {
                        'X-API-KEY': getEncodedKey()
                    }
                }
            )
        } catch (error) {
            console.log(error)
        }
    }

    const handleLogin = async (params: LoginParams, errorCallback?: ErrCallbackType) => {
        const csrfResponse = await axios.get(getEndpoint('csrfToken'), {
            headers: {
                'X-API-KEY': getEncodedKey()
            }
        })

        if (!csrfResponse) {
            toast.error('Error get CSRF Token')

            return
        }

        const csrfToken = csrfResponse.data.csrfToken

        try {
            const response = await axios.post(getEndpoint('login'), params, {
                headers: {
                    'X-CSRF-Token': csrfToken,
                    'X-API-KEY': getEncodedKey()
                }
            })
            const token = response.data.token

            if (response.data.data.status === 0) {
                const swal: any = Swal.fire({
                    icon: 'error',
                    title: 'Anda belum melakukan verifikasi email',
                    text: `Silahkan verifikasi email ${params.email}`,
                    footer: '<a href="#" id="resendVerificationLink">Kirim ulang verifikasi Email</a>',
                    confirmButtonColor: '#ea5455'
                })

                const resendVerificationLink = document.getElementById('resendVerificationLink')
                if (resendVerificationLink) {
                    resendVerificationLink.addEventListener('click', event => {
                        event.preventDefault()
                        handleResendVerificationEmail(params.email)

                        // Close the modal after the link is clicked
                        swal?.close()
                    })
                }

                return
            }

            window.localStorage.setItem('accessToken', token)

            const returnUrl = router.query.returnUrl
            const authResponse = await axios.get<UserDataType>(getEndpoint('auth'), {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'X-API-KEY': getEncodedKey(),
                }
            })

            setUser({ ...authResponse.data })

            window.localStorage.setItem('userData', JSON.stringify(authResponse.data))

            const mainPage = authResponse.data.menu[0].path ?? "/"
            const redirectURL = returnUrl && returnUrl !== mainPage ? returnUrl : mainPage

            router.push(redirectURL as string)
        } catch (err: unknown) {
            if (errorCallback) {
                errorCallback(err)
            }
            throw err;
        }
    }

    const handleLogout = () => {
        router.push('/login')
        setUser(null)
        window.localStorage.clear()
    }

    const handleRegister = async (params: RegisterParams, errorCallback?: ErrCallbackType) => {
        const csrfResponse = await axios.get(getEndpoint('csrfToken'), {
            headers: {
                'X-API-KEY': getEncodedKey()
            }
        })
        const csrfToken = csrfResponse.data.csrfToken

        try {
            const response = await axios.post(getEndpoint('register'), params, {
                headers: {
                    'X-CSRF-Token': csrfToken,
                    'X-API-KEY': getEncodedKey()
                }
            })
            const token = response.data.token

            if (response.data.error) {
                if (errorCallback) errorCallback(response.data.error)
                console.log(errorCallback && errorCallback(response.data.error))
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'register berhasil, silahkan lakukan verifikasi email',
                    confirmButtonColor: '#ea5455'
                }).then(() => {
                    router.push('/login')
                })

                window.localStorage.setItem('accessToken', token)
            }
        } catch (err: any) {
            let message = 'Koneksi gagal';

            if (err.response && err.response.data) {
                // Ambil pesan dari backend jika tersedia
                message = err.response.data.message || err.response.data.error || message;
            } else if (err.message) {
                message = err.message;
            }

            if (errorCallback) {
                errorCallback(err);
            }

            Swal.fire({
                icon: 'error',
                title: 'Registrasi gagal',
                text: message,
                confirmButtonColor: '#ea5455',
            });
        }
    }

    const values = {
        user,
        getToken,
        setGetToken,
        loading,
        setUser,
        setLoading,
        login: handleLogin,
        logout: handleLogout,
        register: handleRegister
    }

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
