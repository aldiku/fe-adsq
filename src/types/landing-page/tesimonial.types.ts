export interface ResponseMasterTestimonial {
    draw: number
    recordsTotal: number
    recordsFiltered: number
    error: string
    status: number
    message: string
    data: DataTestimonial[]
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

export interface DataTestimonial {
    ID: number
    CreatedAt: Date
    UpdatedAt: Date
    DeletedAt: null
    customer_name: string
    customer_occupation: string
    customer_image: string
    testimonial_title: string
    testimonial_description: string
    status: number
}
