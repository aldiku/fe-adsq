export type ErrCallbackType = (err: unknown) => void

export type LoginParams = {
    email: string
    password: string
    rememberMe?: boolean
}

export type RegisterParams = {
    email: string
    password: string
    phone: string
    fullname: string
}

export type UserDataType = {
    data: Data
    menu: Menu[]
    message: string
    status: number
}

export type Data = {
    ID: number
    CreatedAt: Date
    UpdatedAt: Date
    DeletedAt: null
    fullname: string
    email: string
    phone: string
    address: string
    status: number
    role_id: number
    company_id: number
    app_id: number
    email_verified_at: Date
    is_prepaid: boolean
    is_admin: boolean
    is_postpaid: boolean
    am_id: number
    is_affiliator: boolean
    referral_code: string
}

export type Menu = {
    ID: number
    CreatedAt: Date
    UpdatedAt: Date
    DeletedAt: null
    parent_id: number
    name: string
    path: string
    icon: string
    list_order: number
    description: string
    status: number
    type_id: number
    app_id: number
    children: Menu[] | null
    permission: Permission
}

export type Permission = {
    add: number
    read: number
    update: number
    delete: number
    print: number
    approval: number
    download: number
    upload: number
}

export type GetTokenType = {
    status: number
    message: string
    data: {
        ID: number
        CreatedAt: string
        UpdatedAt: string
        DeletedAt: string
        token_addition: number
        token_reduction: number
        token_balance: number
        current_token: number
        user_id: number
        description: string
    }
}

export type AuthValuesType = {
    loading: boolean
    logout: () => void
    user: UserDataType | null
    getToken: GetTokenType | null
    setLoading: (value: boolean) => void
    setUser: (value: UserDataType | null) => void
    setGetToken: (value: GetTokenType | null) => void
    login: (params: LoginParams, errorCallback?: ErrCallbackType) => void
    register: (params: RegisterParams, errorCallback?: ErrCallbackType) => void
}
