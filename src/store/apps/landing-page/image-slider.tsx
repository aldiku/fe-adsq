import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Dispatch } from 'react'
import axiosInstance, { getEndpoint } from '@/utils/api/getApi'

interface Redux {
    getState: any
    dispatch: Dispatch<any>
}

export const fetchImageSlider = createAsyncThunk('appImageSlider/fetchImageSlider', async (params: any) => {
    const response = await axiosInstance.get(getEndpoint('image_slider'), {
        params
    })

    return response.data
})

export const fetchImageSliderById = createAsyncThunk('appImageSlider/fetchImageSliderById', async (id: number) => {
    const response = await axiosInstance.get(`${getEndpoint('image_slider')}/${id}`)

    return response.data
})

export const addImageSlider = createAsyncThunk(
    'appImageSlider/addImageSlider',
    async (data: any, { getState, dispatch }: Redux) => {
        const response = await axiosInstance.post(getEndpoint('image_slider'), data)

        dispatch(fetchImageSlider(getState().ImageSlider.params))

        return response.data
    }
)

export const editImageSlider = createAsyncThunk(
    'appImageSlider/editImageSlider',
    async (data: { id: number; newData: any }, { getState, dispatch }: Redux) => {
        const response = await axiosInstance.put(`${getEndpoint('image_slider')}/${data.id}`, data)

        dispatch(fetchImageSlider(getState().ImageSlider.params))

        return response.data
    }
)

export const deleteImageSlider = createAsyncThunk(
    'appImageSlider/deleteImageSlider',
    async (id: number | string, { getState, dispatch }: Redux) => {
        const response = await axiosInstance.delete(`${getEndpoint('image_slider')}/${id}`)

        dispatch(fetchImageSlider(getState().ImageSlider.params))

        return response.data
    }
)

export const appImageSliderSlice = createSlice({
    name: 'appImageSlider',
    initialState: {
        data: [],
        total: 0,
        params: {},
        loading: false
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchImageSlider.pending, state => {
                state.loading = true
            })
            .addCase(fetchImageSlider.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload.data
                state.total = action.payload.recordsTotal
                state.params = action.meta.arg
            })

        builder
            .addCase(fetchImageSliderById.pending, state => {
                state.loading = true
            })
            .addCase(fetchImageSliderById.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload.data
            })
    }
})

export default appImageSliderSlice.reducer
