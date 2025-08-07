export interface StepPlaceAdsResponse {
    draw: number
    recordsTotal: number
    recordsFiltered: number
    error: string
    status: number
    message: string
    data: DataStepPlaceAds[]
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

export interface DataStepPlaceAds {
    ID: number
    CreatedAt: Date
    UpdatedAt: Date
    DeletedAt: null
    order_list: number
    title: string
    icon: string
    status: number
}
