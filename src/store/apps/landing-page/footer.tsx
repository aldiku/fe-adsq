import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Dispatch } from 'react'
import axiosInstance, { getEndpoint } from '@/utils/api/getApi'

interface Redux {
    getState: any
    dispatch: Dispatch<any>
}

export const fetchFooter = createAsyncThunk('appFooter/fetchFooter', async (params: any) => {
    const response = await axiosInstance.get(getEndpoint('footer') + '/all', {
        params
    })

    return response.data
})

export const fetchFooterSubMenu = createAsyncThunk('appFooterMenu/fetchFooterSubMenu', async (params: any) => {
    const response = await axiosInstance.get(getEndpoint('footer'), {
        params
    })

    return response.data
})

export const fetchFooterById = createAsyncThunk('appFooter/fetchFooterById', async (id: number) => {
    const response = await axiosInstance.get(`${getEndpoint('footer')}/${id}`)

    return response.data
})

export const addFooter = createAsyncThunk(
    'appFooter/addFooter',
    async (data: any, { getState, dispatch }: Redux) => {
        const response = await axiosInstance.post(getEndpoint('footer'), data)
        if (response?.data?.data?.parent > 0) {
            dispatch(fetchFooterSubMenu(getState().Footer.paramsFooterMenu))
        } else {
            dispatch(fetchFooter(getState().Footer.params))
        }

        return response.data
    }
)

export const editFooter = createAsyncThunk(
    'appFooter/editFooter',
    async (data: any, { getState, dispatch }: Redux) => {
        const response = await axiosInstance.put(`${getEndpoint('footer')}/${data.id}`, data)
        if (response?.data?.data?.parent > 0) {
            dispatch(fetchFooterSubMenu(getState().Footer.paramsFooterMenu))
        } else {
            dispatch(fetchFooter(getState().Footer.params))
        }

        return response.data
    }
)

export const deleteFooter = createAsyncThunk(
    'appFooter/deleteFooter',
    async (id: number | string, { getState, dispatch }: Redux) => {
        const response = await axiosInstance.delete(`${getEndpoint('footer')}/${id}`)
        if (response?.data?.data?.parent > 0) {
            dispatch(fetchFooterSubMenu(getState().Footer.paramsFooterMenu))
        } else {
            dispatch(fetchFooter(getState().Footer.params))
        }

        return response.data
    }
)

export const appFooterSlice = createSlice({
    name: 'appFooter',
    initialState: {
        data: [],
        total: 0,
        params: {},
        loading: false,

        dataFooterMenu: [],
        totalFooterMenu: 0,
        paramsFooterMenu: {},
        loadingFooterMenu: false

    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchFooter.pending, state => {
                state.loading = true
            })
            .addCase(fetchFooter.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload.data
                state.total = action.payload.data.recordsFiltered
                state.params = action.meta.arg
            })

        builder
            .addCase(fetchFooterSubMenu.pending, state => {
                state.loadingFooterMenu = true
            })
            .addCase(fetchFooterSubMenu.fulfilled, (state, action) => {
                state.loadingFooterMenu = false
                state.dataFooterMenu = action.payload.data.data
                state.totalFooterMenu = action.payload.data.recordsFiltered
                state.paramsFooterMenu = action.meta.arg
            })
        builder
            .addCase(fetchFooterById.pending, state => {
                state.loading = true
            })
            .addCase(fetchFooterById.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload.data
            })
    }
})

export default appFooterSlice.reducer
