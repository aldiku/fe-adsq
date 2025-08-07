import axios from 'axios'
import toast from 'react-hot-toast'
import getEncodedKey, { calculateHMAC, encodeBase64 } from './getEncodedKey'

export const endpoints = {
    home: "",

    // ** Region
    kabupaten: "v1/region/kab",

    // Authentication
    login: 'v1/login',
    register: 'v1/register',
    forgotPassword: 'v1/forgot-password',
    auth: 'v1/get-me',
    verification: 'v1/verify-email',
    resendVerification: 'v1/resend-email-verification',
    resetPassword: 'v1/reset-password',
    globalUser: 'v1/global-user',
    updatePassword: 'v1/update-password',
    get_token: 'v1/global-token',
    getMe: 'v1/get-me',

    // Access Control
    menu: 'v1/global-menu',
    typeMenu: 'v1/type-menu',
    role: 'v1/role',
    user: 'v1/user',

    // File Upload
    upload: 'v1/file',
    ConvertCsv: 'v1/order/sms-broadcast/upload-csv',

    // Master Data
    apps: 'v1/global-app',
    company: 'v1/global-company',
    coupon: 'v1/coupon',
    coupon_history: '/v1/coupon-history',
    billboard: 'v1/order/dooh-videotron',
    notificationEmail: 'v1/notification-for-email',

    // Blog
    blog: 'v1/landing-page/blog',
    blogCategory: 'v1/landing-page/blog/category',

    // Product
    product: 'v1/product',
    productType: 'v1/product/type',
    productCategory: 'v1/product/category',
    productVariant: 'v1/product/variant',
    operator: 'v1/operator',
    provider_ads: 'v1/sms-ads-provider',
    productPackage: 'v1/product/package',

    // Order
    cart: 'v1/cart',
    order_cart: 'v1/order/cart',
    sms_lba: 'v1/order/sms-location-based',
    sms_targeted: 'v1/order/sms-targeted',
    sms_broadcast: 'v1/order/sms-broadcast',
    onlineAdvertising: 'v1/order/online-advertising',
    pushNotification: 'v1/order/push-notif',
    googleDisplayNetwork: 'v1/order/google-display-network',
    facebookAdvertising: 'v1/order/facebook',
    youtubeAdvertising: 'v1/order/youtube',
    instgramAdvertising: 'v1/order/instagram',
    tiktokAdvertising: 'v1/order/tiktok',
    downloadDocument: 'v1/order/transaction/download/',
    whatsapp_business: 'v1/order/whatsapp-business',
    whatsappBlast: 'v1/order/whatsapp-blast',

    // Check Whatsapp Package
    checkWhatsappPackage: 'v1/order/whatsapp-business/check/purchased-variant',

    // Payment
    payment_group: 'v1/payment-group',
    payment_channel: 'v1/payment-channel',
    invoice: 'v1/payments/invoice',
    transaction: 'v1/order/transaction',
    createTransaction: 'v1/transaction',
    applyCoupon: 'v1/coupon/apply',
    checkCoupon: 'v1/coupon/cek',

    // Campaign
    campaign: 'v1/campaign',
    audience: 'v1/audience',
    orderCampaign: 'v1/order/campaign',
    reportCampaign: 'v1/report/score-card/sum-total-order-campaign',

    // Hlr Checker
    hlr: 'v1/hlrchecker',

    // Token
    has_token: 'v1/user-has-tokens',
    token: 'v1/token',
    globalToken: 'v1/global-token',

    // Dashboard
    dashboard: 'v1/dashboard',
    dashboardStatistics: 'v1/dashboard/statistik',
    reportScoreCard: '/v1/report/score-card',
    reportAdmin: '/v1/admin/user',
    dashboardTopTen: 'v1/admin/topten',
    interest: '/v1/interest',

    // CSRF Token
    csrfToken: 'v1/csrf-token',

    // Promo
    promo: 'v1/promo',

    // Custom Price Operator
    custom_price: 'v1/custom-price',
    custom_price_user_list: 'v1/list-user-custom-price',

    // Region
    prov: 'v1/region/prov',
    kab: 'v1/region/kab',
    kec: 'v1/region/kec',
    kel: 'v1/region/kel',

    //affiliate
    referral_code: 'v1/referral-code',
    referral_lead: 'v1/referral-lead',
    affiliator: 'v1/affiliator',
    commission: 'v1/commission',
    commission_withdraw: 'v1/user-has-commission',
    add_affiliator: 'v1/affiliator/admin/update-referral/',
    testimonial: '/v1/landing-page/testimonial',
    footer: '/v1/landing-page/footer',
    image_slider: '/v1/landing-page/image-slider',
    step_place_ads: '/v1/landing-page/step-place-ads',
    about_me: '/v1/landing-page/about-me',
    reasons_for_ads: '/v1/landing-page/problem',
    mitra: '/v1/landing-page/mitra',
    service: '/v1/landing-page/service',

    // Report
    report: 'v1/report',

    // Import Transaction Excel Files
    smsLbaExcelImport: 'v1/import/lba-campaign',

    // User Management
    top_up_token: '/v1/order/token',
    assignAM: 'v1/admin/assign-am',

    //Broadcast Register
    sms_broadcast_register: '/v1/order/sms-broadcast/register',
    wa_bussiness_register: '/v1/order/whatsapp-business/register',

    navbar: '/v1/navbar/menu',
    checkPermission: '/v1/check-permission',

    //landingpage
    category: "v1/product/category",
    subCategory: "v1/product/sub-category",
    contact_us: "v1/contact-us",
    landing_page: "v1/landing-page",
    free_trial: "v1/free-trial",
    book_meeting: "v1/book-meeting",
    reason_for_ads: "v1/landing-page/problem",
}

export type ApiEndpoint = keyof typeof endpoints

// Condition to prevent unreadable env file
let host: string
if (typeof window !== 'undefined') {
    host = process.env.NEXT_PUBLIC_API_URL ?? '/'
} else {
    host = process.env.NEXT_PUBLIC_API_URL ?? '/'
}

export const getEndpoint: (key: ApiEndpoint) => string = key => {
    const cleanHost = host.replace(/\/+$/, ''); // Remove trailing slashes
    const cleanEndpoint = endpoints[key].replace(/^\/+/, ''); // Remove leading slashes
    
    return `${cleanHost}/${cleanEndpoint}`;
};

export function getToken() {
    let str = null
    if (typeof window !== 'undefined') {
        str = localStorage.getItem('accessToken')
    }
    if (str !== null) {
        str = str.split('"').join('')
    } else {
        str = ''
    }

    return str
}

export const getMenuPath = () => {
    let menuPath = ''

    if (typeof window !== 'undefined') {
        menuPath = localStorage.getItem('menuPath') || ''
    }

    const secret = process.env.NEXT_PUBLIC_KEY || ''
    const hmac = calculateHMAC(menuPath, secret)
    const encodedMenuPath = encodeBase64(menuPath, hmac)

    return encodedMenuPath
}

const axiosInstance = axios.create({
    baseURL: host
})

axiosInstance.interceptors.request.use(config => {
    const token = getToken()
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    config.headers['X-API-KEY'] = getEncodedKey()

    config.headers['X-MENU-PATH'] = getMenuPath()

    return config
})

axiosInstance.interceptors.response.use(
    function (response) {
        if (response.config.method === 'post') {
            const successMessage = response?.data?.message
            if (successMessage)
                toast.success(successMessage, {
                    duration: 4000
                })
        } else if (response.config.method === 'delete') {
            const successMessage = response?.data?.message
            if (successMessage) toast.success(successMessage)
        } else if (response.config.method === 'put') {
            const successMessage = response?.data?.message
            if (successMessage) toast.success(successMessage)
        } else if (response.config.method === 'patch') {
            const successMessage = response?.data?.message
            if (successMessage) toast.success(successMessage)
        }

        return response
    },
    function (error) {
        const errorMessage: string = Array.isArray(error.response?.data?.details)
            ? error.response?.data?.details[0]?.error
            : error.response?.data?.details || error.response?.data?.message || 'Internal Server Error'

        if (!axios.isCancel(error)) {
            if (errorMessage != "Authorization Token Not Found"){
                toast.error(errorMessage)
            }
        }

        return Promise.reject(error)
    }
)

export default axiosInstance
