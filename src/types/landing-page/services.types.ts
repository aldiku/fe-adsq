export interface ResponseServices {
    draw: number
    recordsTotal: number
    recordsFiltered: number
    error: string
    status: number
    message: string
    data: DataServices[]
    search: string
    next: boolean
    back: boolean
    limit: number
    offset: number
    total_page: number
    current_page: number
    sort: string
    order: string
}

export interface DataServices {
    ID: number
    CreatedAt: Date
    UpdatedAt: Date
    DeletedAt: null
    title: string
    description: string
    avatar: string
    flag: string
    status: number
    category: {
        image: string
        name: string
        order_list: number
        path: string
    }[]
}
