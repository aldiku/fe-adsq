export interface ResonsForAds {
    draw: number
    recordsTotal: number
    recordsFiltered: number
    error: string
    status: number
    message: string
    data: DataReasonsForAds[]
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

export interface DataReasonsForAds {
    ID: number
    CreatedAt: Date
    UpdatedAt: Date
    DeletedAt: null
    title: string
    description: string
    feature: Feature[]
    status: number
}

export interface Feature {
    icon: string
    title: string
    description: string
    order_list: number
}
