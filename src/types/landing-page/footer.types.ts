export interface FooterResponse {
    data: Data
    message: string
    success: number
}

export interface Data {
    draw: number
    recordsTotal: number
    recordsFiltered: number
    error: string
    status: number
    message: string
    data: DataFooter[]
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

export interface DataFooter {
    ID: number
    CreatedAt: Date
    UpdatedAt: Date
    DeletedAt: null
    title: string
    description: string
    link: string
    parent: number
    status: number
    order_list: number
}
