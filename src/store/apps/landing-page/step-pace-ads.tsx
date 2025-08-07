import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Dispatch } from 'react'
import axiosInstance, { getEndpoint } from '@/utils/api/getApi'

interface Redux {
    getState: any
    dispatch: Dispatch<any>
}

export const fetchStepPlaceAds = createAsyncThunk('appStepPlaceAds/fetchStepPlaceAds', async (params: any) => {
    const response = await axiosInstance.get(getEndpoint('step_place_ads'), {
        params
    })

    return response.data
})

export const fetchStepPlaceAdsById = createAsyncThunk('appStepPlaceAds/fetchStepPlaceAdsById', async (id: number) => {
    const response = await axiosInstance.get(`${getEndpoint('step_place_ads')}/${id}`)

    return response.data
})

export const addStepPlaceAds = createAsyncThunk(
    'appStepPlaceAds/addStepPlaceAds',
    async (data: any, { getState, dispatch }: Redux) => {
        const response = await axiosInstance.post(getEndpoint('step_place_ads'), data)

        dispatch(fetchStepPlaceAds(getState().StepPlaceAds.params))

        return response.data
    }
)

export const editStepPlaceAds = createAsyncThunk(
    'appStepPlaceAds/editStepPlaceAds',
    async (data: { id: number; newData: any }, { getState, dispatch }: Redux) => {
        const response = await axiosInstance.put(`${getEndpoint('step_place_ads')}/${data.id}`, data)

        dispatch(fetchStepPlaceAds(getState().StepPlaceAds.params))

        return response.data
    }
)

export const deleteStepPlaceAds = createAsyncThunk(
    'appStepPlaceAds/deleteStepPlaceAds',
    async (id: number | string, { getState, dispatch }: Redux) => {
        const response = await axiosInstance.delete(`${getEndpoint('step_place_ads')}/${id}`)

        dispatch(fetchStepPlaceAds(getState().StepPlaceAds.params))

        return response.data
    }
)

export const appStepPlaceAdsSlice = createSlice({
    name: 'appStepPlaceAds',
    initialState: {
        data: [],
        total: 0,
        params: {},
        loading: false
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchStepPlaceAds.pending, state => {
                state.loading = true
            })
            .addCase(fetchStepPlaceAds.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload.data
                state.total = action.payload.recordsTotal
                state.params = action.meta.arg
            })

        builder
            .addCase(fetchStepPlaceAdsById.pending, state => {
                state.loading = true
            })
            .addCase(fetchStepPlaceAdsById.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload.data
            })
    }
})

export default appStepPlaceAdsSlice.reducer
