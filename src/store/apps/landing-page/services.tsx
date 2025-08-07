import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Dispatch } from 'react'
import axiosInstance, { getEndpoint } from '@/utils/api/getApi'

interface Redux {
    getState: any
    dispatch: Dispatch<any>
}

export const fetchServices = createAsyncThunk('appServices/fetchServices', async (params: any) => {
    const response = await axiosInstance.get(getEndpoint('service'), {
        params
    })

    return response.data
})

export const fetchServicesById = createAsyncThunk('appServices/fetchServicesById', async (id: number) => {
    const response = await axiosInstance.get(`${getEndpoint('service')}/${id}`)

    return response.data
})

export const addServices = createAsyncThunk(
    'appServices/addServices',
    async (data: any, { getState, dispatch }: Redux) => {
        const response = await axiosInstance.post(getEndpoint('service'), data)

        dispatch(fetchServices(getState().services.params))

        return response.data
    }
)

export const editServices = createAsyncThunk(
    'appServices/editServices',
    async (data: { id: number; newData: any }, { getState, dispatch }: Redux) => {
        const response = await axiosInstance.put(`${getEndpoint('service')}/${data.id}`, data)

        dispatch(fetchServices(getState().services.params))

        return response.data
    }
)

export const deleteServices = createAsyncThunk(
    'appServices/deleteServices',
    async (id: number | string, { getState, dispatch }: Redux) => {
        const response = await axiosInstance.delete(`${getEndpoint('service')}/${id}`)

        dispatch(fetchServices(getState().services.params))

        return response.data
    }
)

export const appServicesSlice = createSlice({
    name: 'appServices',
    initialState: {
        data: [],
        total: 0,
        params: {},
        loading: false
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchServices.pending, state => {
                state.loading = true
            })
            .addCase(fetchServices.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload.data
                state.total = action.payload.recordsTotal
                state.params = action.meta.arg
            })

        builder
            .addCase(fetchServicesById.pending, state => {
                state.loading = true
            })
            .addCase(fetchServicesById.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload.data
            })
    }
})

export default appServicesSlice.reducer
