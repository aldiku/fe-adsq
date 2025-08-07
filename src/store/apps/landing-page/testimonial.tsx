import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Dispatch } from 'react'
import axiosInstance, { getEndpoint } from '@/utils/api/getApi'

interface Redux {
    getState: any
    dispatch: Dispatch<any>
}

export const fetchTestimonial = createAsyncThunk('appTestimonial/fetchTestimonial', async (params: any) => {
    const response = await axiosInstance.get(getEndpoint('testimonial'), {
        params
    })

    return response.data
})

export const fetchTestimonialById = createAsyncThunk('appTestimonial/fetchTestimonialById', async (id: number) => {
    const response = await axiosInstance.get(`${getEndpoint('testimonial')}/${id}`)

    return response.data
})

export const addTestimonial = createAsyncThunk(
    'appTestimonial/addTestimonial',
    async (data: any, { getState, dispatch }: Redux) => {
        const response = await axiosInstance.post(getEndpoint('testimonial'), data)

        dispatch(fetchTestimonial(getState().Testimonial.params))

        return response.data
    }
)

export const editTestimonial = createAsyncThunk(
    'appTestimonial/editTestimonial',
    async (data: { id: number; newData: any }, { getState, dispatch }: Redux) => {
        const response = await axiosInstance.put(`${getEndpoint('testimonial')}/${data.id}`, data)

        dispatch(fetchTestimonial(getState().Testimonial.params))

        return response.data
    }
)

export const deleteTestimonial = createAsyncThunk(
    'appTestimonial/deleteTestimonial',
    async (id: number | string, { getState, dispatch }: Redux) => {
        const response = await axiosInstance.delete(`${getEndpoint('testimonial')}/${id}`)

        dispatch(fetchTestimonial(getState().Testimonial.params))

        return response.data
    }
)

export const appTestimonialSlice = createSlice({
    name: 'appTestimonial',
    initialState: {
        data: [],
        total: 0,
        params: {},
        loading: false
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchTestimonial.pending, state => {
                state.loading = true
            })
            .addCase(fetchTestimonial.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload.data
                state.total = action.payload.recordsTotal
                state.params = action.meta.arg
            })

        builder
            .addCase(fetchTestimonialById.pending, state => {
                state.loading = true
            })
            .addCase(fetchTestimonialById.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload.data
            })
    }
})

export default appTestimonialSlice.reducer
