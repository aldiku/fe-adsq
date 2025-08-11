import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Dispatch } from 'react'
import axiosInstance, { getEndpoint } from '@/utils/api/getApi'

// ---- Types ----
export interface ImageSliderItem {
  id: number
  title: string
  imageUrl: string
  [key: string]: string | number | boolean
}

export interface FetchParams {
  [key: string]: string | number | boolean
}

export interface ImageSliderState {
  data: ImageSliderItem[]
  total: number
  params: FetchParams
  loading: boolean
}

// ---- Async thunks ----
export const fetchImageSlider = createAsyncThunk(
  'appImageSlider/fetchImageSlider',
  async (params: FetchParams) => {
    const response = await axiosInstance.get(getEndpoint('image_slider'), {
      params
    })
    return response.data
  }
)

export const fetchImageSliderById = createAsyncThunk(
  'appImageSlider/fetchImageSliderById',
  async (id: number) => {
    const response = await axiosInstance.get(`${getEndpoint('image_slider')}/${id}`)
    return response.data
  }
)

export const addImageSlider = createAsyncThunk(
  'appImageSlider/addImageSlider',
  async (data: Partial<ImageSliderItem>, thunkAPI) => {
    const response = await axiosInstance.post(getEndpoint('image_slider'), data)
    const state = thunkAPI.getState() as { ImageSlider: ImageSliderState }
    thunkAPI.dispatch(fetchImageSlider(state.ImageSlider.params))
    return response.data
  }
)

export const editImageSlider = createAsyncThunk(
  'appImageSlider/editImageSlider',
  async (
    data: { id: number; newData: Partial<ImageSliderItem> },
    thunkAPI
  ) => {
    const response = await axiosInstance.put(
      `${getEndpoint('image_slider')}/${data.id}`,
      data.newData
    )
    const state = thunkAPI.getState() as { ImageSlider: ImageSliderState }
    thunkAPI.dispatch(fetchImageSlider(state.ImageSlider.params))
    return response.data
  }
)

export const deleteImageSlider = createAsyncThunk(
  'appImageSlider/deleteImageSlider',
  async (id: number | string, thunkAPI) => {
    const response = await axiosInstance.delete(`${getEndpoint('image_slider')}/${id}`)
    const state = thunkAPI.getState() as { ImageSlider: ImageSliderState }
    thunkAPI.dispatch(fetchImageSlider(state.ImageSlider.params))
    return response.data
  }
)

// ---- Slice ----
const initialState: ImageSliderState = {
  data: [],
  total: 0,
  params: {},
  loading: false
}

export const appImageSliderSlice = createSlice({
  name: 'appImageSlider',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchImageSlider.pending, state => {
        state.loading = true
      })
      .addCase(
        fetchImageSlider.fulfilled,
        (
          state,
          action: PayloadAction<any, string, { arg: FetchParams }>
        ) => {
          state.loading = false
          state.data = action.payload.data
          state.total = action.payload.recordsTotal
          state.params = action.meta.arg
        }
      )
      .addCase(fetchImageSliderById.pending, state => {
        state.loading = true
      })
      .addCase(fetchImageSliderById.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false
        state.data = action.payload.data
      })
  }
})

export default appImageSliderSlice.reducer
