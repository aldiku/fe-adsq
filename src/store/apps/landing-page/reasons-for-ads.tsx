import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Dispatch } from 'react'
import axiosInstance, { getEndpoint } from '@/utils/api/getApi'

interface Redux {
    getState: any
    dispatch: Dispatch<any>
}

export const fetchReasonsForAds = createAsyncThunk('appReasonsForAds/fetchReasonsForAds', async (params: any) => {
    const response = await axiosInstance.get(getEndpoint('reasons_for_ads'), {
        params
    })

    return response.data
})

export const fetchReasonsForAdsById = createAsyncThunk(
    'appReasonsForAds/fetchReasonsForAdsById',
    async (id: number) => {
        const response = await axiosInstance.get(`${getEndpoint('reasons_for_ads')}/${id}`)

        return response.data
    }
)

export const addReasonsForAds = createAsyncThunk(
    'appReasonsForAds/addReasonsForAds',
    async (data: any, { getState, dispatch }: Redux) => {
        const response = await axiosInstance.post(getEndpoint('reasons_for_ads'), data)

        dispatch(fetchReasonsForAds(getState().reasonsForAds.params))

        return response.data
    }
)

export const editReasonsForAds = createAsyncThunk(
    'appReasonsForAds/editReasonsForAds',
    async (data: { id: number; newData: any }, { getState, dispatch }: Redux) => {
        const response = await axiosInstance.put(`${getEndpoint('reasons_for_ads')}/${data.id}`, data)

        dispatch(fetchReasonsForAds(getState().reasonsForAds.params))

        return response.data
    }
)

export const deleteReasonsForAds = createAsyncThunk(
    'appReasonsForAds/deleteReasonsForAds',
    async (id: number | string, { getState, dispatch }: Redux) => {
        const response = await axiosInstance.delete(`${getEndpoint('reasons_for_ads')}/${id}`)

        dispatch(fetchReasonsForAds(getState().reasonsForAds.params))

        return response.data
    }
)

export const appReasonsForAdsSlice = createSlice({
    name: 'appReasonsForAds',
    initialState: {
        data: [],
        total: 0,
        params: {},
        loading: false
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchReasonsForAds.pending, state => {
                state.loading = true
            })
            .addCase(fetchReasonsForAds.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload.data
                state.total = action.payload.recordsTotal
                state.params = action.meta.arg
            })

        builder
            .addCase(fetchReasonsForAdsById.pending, state => {
                state.loading = true
            })
            .addCase(fetchReasonsForAdsById.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload.data
            })
    }
})

export default appReasonsForAdsSlice.reducer
