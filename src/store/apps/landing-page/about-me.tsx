import axiosInstance, { getEndpoint } from "@/utils/api/getApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState, AppDispatch } from "@/store";

// ===== Types =====
export interface AboutMe {
  id: number;
  name: string;
  bio: string;
  // add more fields that match your API
}

export interface AboutMeParams {
  page?: number;
  limit?: number;
  search?: string;
}

export interface AboutMeListResponse {
  data: AboutMe[];
  recordsTotal: number;
}

export interface AboutMeDetailResponse {
  data: AboutMe;
}

interface AppAboutMeState {
  data: AboutMe[] | AboutMe;
  total: number;
  params: AboutMeParams;
  loading: boolean;
}

// ===== Initial State =====
const initialState: AppAboutMeState = {
  data: [],
  total: 0,
  params: {},
  loading: false,
};

// ===== Async Thunks =====
export const fetchAboutMe = createAsyncThunk<
  AboutMeListResponse, // return type
  AboutMeParams,       // argument type
  { state: RootState }
>("appAboutMe/fetchAboutMe", async (params) => {
  const response = await axiosInstance.get<AboutMeListResponse>(
    getEndpoint("about_me"),
    { params }
  );
  return response.data;
});

export const fetchAboutMeById = createAsyncThunk<
  AboutMeDetailResponse,
  number
>("appAboutMe/fetchAboutMeById", async (id) => {
  const response = await axiosInstance.get<AboutMeDetailResponse>(
    `${getEndpoint("about_me")}/${id}`
  );
  return response.data;
});

export const addAboutMe = createAsyncThunk<
  AboutMe,
  AboutMe,
  { state: RootState; dispatch: AppDispatch }
>("appAboutMe/addAboutMe", async (data, { getState, dispatch }) => {
  const response = await axiosInstance.post<AboutMe>(
    getEndpoint("about_me"),
    data
  );

  dispatch(fetchAboutMe(getState().AboutMe.params));
  return response.data;
});

export const editAboutMe = createAsyncThunk<
  AboutMe,
  { id: number; newData: Partial<AboutMe> },
  { state: RootState; dispatch: AppDispatch }
>("appAboutMe/editAboutMe", async ({ id, newData }, { getState, dispatch }) => {
  const response = await axiosInstance.put<AboutMe>(
    `${getEndpoint("about_me")}/${id}`,
    newData
  );

  dispatch(fetchAboutMe(getState().AboutMe.params));
  return response.data;
});

export const deleteAboutMe = createAsyncThunk<
  { success: boolean },
  number,
  { state: RootState; dispatch: AppDispatch }
>("appAboutMe/deleteAboutMe", async (id, { getState, dispatch }) => {
  const response = await axiosInstance.delete<{ success: boolean }>(
    `${getEndpoint("about_me")}/${id}`
  );

  dispatch(fetchAboutMe(getState().AboutMe.params));
  return response.data;
});

// ===== Slice =====
export const appAboutMeSlice = createSlice({
  name: "appAboutMe",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchAboutMe
      .addCase(fetchAboutMe.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAboutMe.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.total = action.payload.recordsTotal;
        state.params = action.meta.arg;
      })

      // fetchAboutMeById
      .addCase(fetchAboutMeById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAboutMeById.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
      });
  },
});

export default appAboutMeSlice.reducer;
