export interface ResponseMasterImageSlider {
    draw: number
    recordsTotal: number
    recordsFiltered: number
    error: string
    status: number
    message: string
    data: DataImageSlider[]
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

export interface DataImageSlider {
  ID: number;
  CreatedAt: Date;
  UpdatedAt: Date;
  DeletedAt: null;
  image: string;
  text_color: string;
  headline: string;
  tagline: string;
  description: string;
  button_order: Button;
  button_book_meeting: Button;
  button_free_trial: Button;
  status: number;
  order_list: number;
}

export interface Button {
    show: boolean
    cta: string
}
