import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Dispatch } from 'react'
import axiosInstance, { getEndpoint } from '@/utils/api/getApi'

interface Redux {
    getState: any
    dispatch: Dispatch<any>
}

export const fetchOurClient = createAsyncThunk('appOurClient/fetchOurClient', async (params: any) => {
    const response = await axiosInstance.get(getEndpoint('mitra'), {
        params
    })

    return response.data
})

export const fetchOurClientById = createAsyncThunk('appOurClient/fetchOurClientById', async (id: number) => {
    const response = await axiosInstance.get(`${getEndpoint('mitra')}/${id}`)

    return response.data
})

export const addOurClient = createAsyncThunk(
    'appOurClient/addOurClient',
    async (data: any, { getState, dispatch }: Redux) => {
        const response = await axiosInstance.post(getEndpoint('mitra'), data)

        dispatch(fetchOurClient(getState().ourClient.params))

        return response.data
    }
)

export const editOurClient = createAsyncThunk(
    'appOurClient/editOurClient',
    async (data: { id: number; newData: any }, { getState, dispatch }: Redux) => {
        const response = await axiosInstance.put(`${getEndpoint('mitra')}/${data.id}`, data)

        dispatch(fetchOurClient(getState().ourClient.params))

        return response.data
    }
)

export const deleteOurClient = createAsyncThunk(
    'appOurClient/deleteOurClient',
    async (id: number | string, { getState, dispatch }: Redux) => {
        const response = await axiosInstance.delete(`${getEndpoint('mitra')}/${id}`)

        dispatch(fetchOurClient(getState().ourClient.params))

        return response.data
    }
)

export const appOurClientSlice = createSlice({
    name: 'appOurClient',
    initialState: {
        data: [],
        total: 0,
        params: {},
        loading: false
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchOurClient.pending, state => {
                state.loading = true
            })
            .addCase(fetchOurClient.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload.data
                state.total = action.payload.recordsTotal
                state.params = action.meta.arg
            })

        builder
            .addCase(fetchOurClientById.pending, state => {
                state.loading = true
            })
            .addCase(fetchOurClientById.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload.data
            })
    }
})

export default appOurClientSlice.reducer
