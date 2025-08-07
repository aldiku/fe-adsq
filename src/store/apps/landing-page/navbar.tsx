import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Dispatch } from 'react'
import axiosInstance, { getEndpoint } from '@/utils/api/getApi'

interface Redux {
    getState: any
    dispatch: Dispatch<any>
}

export const fetchNavbar = createAsyncThunk('appNavbar/fetchNavbar', async (params: any) => {
    const response = await axiosInstance.get(getEndpoint('navbar'), {
        params
    })

    return response.data
})

export const fetchNavbarById = createAsyncThunk('appNavbar/fetchNavbarById', async (id: number) => {
    const response = await axiosInstance.get(`${getEndpoint('navbar')}/${id}`)

    return response.data
})

export const addNavbar = createAsyncThunk(
    'appNavbar/addNavbar',
    async (data: any, { getState, dispatch }: Redux) => {
        const response = await axiosInstance.post(getEndpoint('navbar'), data)

        dispatch(fetchNavbar(getState().Navbar.params))

        return response.data
    }
)

export const editNavbar = createAsyncThunk(
    'appNavbar/editNavbar',
    async (data: { id: number; newData: any }, { getState, dispatch }: Redux) => {
        const response = await axiosInstance.put(`${getEndpoint('navbar')}/${data.id}`, data)

        dispatch(fetchNavbar(getState().Navbar.params))

        return response.data
    }
)

export const deleteNavbar = createAsyncThunk(
    'appNavbar/deleteNavbar',
    async (id: number | string, { getState, dispatch }: Redux) => {
        const response = await axiosInstance.delete(`${getEndpoint('navbar')}/${id}`)

        dispatch(fetchNavbar(getState().Navbar.params))

        return response.data
    }
)

export const appNavbarSlice = createSlice({
    name: 'appNavbar',
    initialState: {
        data: [],
        total: 0,
        params: {},
        loading: false
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchNavbar.pending, state => {
                state.loading = true
            })
            .addCase(fetchNavbar.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload.data
                state.total = action.payload.recordsTotal
                state.params = action.meta.arg
            })

        builder
            .addCase(fetchNavbarById.pending, state => {
                state.loading = true
            })
            .addCase(fetchNavbarById.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload.data
            })
    }
})

export default appNavbarSlice.reducer
