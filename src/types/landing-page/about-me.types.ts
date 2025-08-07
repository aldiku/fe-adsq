export interface AboutMe {
    draw: number
    recordsTotal: number
    recordsFiltered: number
    error: string
    status: number
    message: string
    data: DataAboutMe[]
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

export interface DataAboutMe {
    ID: number
    CreatedAt: Date
    UpdatedAt: Date
    DeletedAt: null
    title: string
    description: string
    youtube_url: string
    status: number
}
