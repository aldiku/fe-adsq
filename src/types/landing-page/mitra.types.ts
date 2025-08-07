export interface ResponseMitra {
    draw: number
    recordsTotal: number
    recordsFiltered: number
    error: string
    status: number
    message: string
    data: DataMitra[]
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

export interface DataMitra {
    ID: number
    CreatedAt: Date
    UpdatedAt: Date
    DeletedAt: null
    title: string
    description: string
    status: number
    item: {
        flag: number
        image: string
        name: string
        order_list: number
        status: number
    }[]
}
