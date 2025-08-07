import axiosInstance, { getEndpoint } from '@/utils/api/getApi'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const fetchFooterAll = createAsyncThunk('appFooter/fetchFooter', async () => {
    const response = await axiosInstance.get(getEndpoint('footer') + '/all')

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


export const appFooterSlice = createSlice({
    name: 'appFooter',
    initialState: {
        data: [],
        loading: false,

        dataFooterMenu: [],
        totalFooterMenu: 0,
        paramsFooterMenu: {},
        loadingFooterMenu: false

    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchFooterAll.pending, state => {
                state.loading = true
            })
            .addCase(fetchFooterAll.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload.data
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
