import axiosInstance, { getEndpoint } from '@/utils/api/getApi'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Dispatch } from 'react'

interface Redux {
    getState: any
    dispatch: Dispatch<any>
}

export const fetchAboutMe = createAsyncThunk('appAboutMe/fetchAboutMe', async (params: any) => {
    const response = await axiosInstance.get(getEndpoint('about_me'), {
        params
    })

    return response.data
})

export const fetchAboutMeById = createAsyncThunk('appAboutMe/fetchAboutMeById', async (id: number) => {
    const response = await axiosInstance.get(`${getEndpoint('about_me')}/${id}`)

    return response.data
})

export const addAboutMe = createAsyncThunk(
    'appAboutMe/addAboutMe',
    async (data: any, { getState, dispatch }: Redux) => {
        const response = await axiosInstance.post(getEndpoint('about_me'), data)

        dispatch(fetchAboutMe(getState().AboutMe.params))

        return response.data
    }
)

export const editAboutMe = createAsyncThunk(
    'appAboutMe/editAboutMe',
    async (data: { id: number; newData: any }, { getState, dispatch }: Redux) => {
        const response = await axiosInstance.put(`${getEndpoint('about_me')}/${data.id}`, data)

        dispatch(fetchAboutMe(getState().AboutMe.params))

        return response.data
    }
)

export const deleteAboutMe = createAsyncThunk(
    'appAboutMe/deleteAboutMe',
    async (id: number | string, { getState, dispatch }: Redux) => {
        const response = await axiosInstance.delete(`${getEndpoint('about_me')}/${id}`)

        dispatch(fetchAboutMe(getState().AboutMe.params))

        return response.data
    }
)

export const appAboutMeSlice = createSlice({
    name: 'appAboutMe',
    initialState: {
        data: [],
        total: 0,
        params: {},
        loading: false
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchAboutMe.pending, state => {
                state.loading = true
            })
            .addCase(fetchAboutMe.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload.data
                state.total = action.payload.recordsTotal
                state.params = action.meta.arg
            })

        builder
            .addCase(fetchAboutMeById.pending, state => {
                state.loading = true
            })
            .addCase(fetchAboutMeById.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload.data
            })
    }
})

export default appAboutMeSlice.reducer
