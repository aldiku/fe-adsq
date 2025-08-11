import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance, { getEndpoint } from "@/utils/api/getApi";
import type { RootState, AppDispatch } from "@/store";

// ===== Types =====
export interface FooterItem {
  id: number;
  name: string;
  parent: number;
  // add other fields from your API
}

export interface FooterParams {
  page?: number;
  limit?: number;
  search?: string;
}

export interface FooterListResponse {
  data: FooterItem[];
  recordsFiltered: number;
}

export interface FooterDetailResponse {
  data: FooterItem;
}

interface AppFooterState {
  data: FooterItem[];
  total: number;
  params: FooterParams;
  loading: boolean;

  dataFooterMenu: FooterItem[];
  totalFooterMenu: number;
  paramsFooterMenu: FooterParams;
  loadingFooterMenu: boolean;
}

// ===== Initial State =====
const initialState: AppFooterState = {
  data: [],
  total: 0,
  params: {},
  loading: false,

  dataFooterMenu: [],
  totalFooterMenu: 0,
  paramsFooterMenu: {},
  loadingFooterMenu: false,
};

// ===== Async Thunks =====
export const fetchFooter = createAsyncThunk<
  { data: FooterListResponse },
  FooterParams,
  { state: RootState }
>("appFooter/fetchFooter", async (params) => {
  const response = await axiosInstance.get<{ data: FooterListResponse }>(
    getEndpoint("footer") + "/all",
    { params }
  );
  return response.data;
});

export const fetchFooterSubMenu = createAsyncThunk<
  { data: FooterListResponse },
  FooterParams,
  { state: RootState }
>("appFooterMenu/fetchFooterSubMenu", async (params) => {
  const response = await axiosInstance.get<{ data: FooterListResponse }>(
    getEndpoint("footer"),
    { params }
  );
  return response.data;
});

export const fetchFooterById = createAsyncThunk<
  { data: FooterItem },
  number
>("appFooter/fetchFooterById", async (id) => {
  const response = await axiosInstance.get<{ data: FooterItem }>(
    `${getEndpoint("footer")}/${id}`
  );
  return response.data;
});

export const addFooter = createAsyncThunk<
  FooterItem,
  FooterItem,
  { state: RootState; dispatch: AppDispatch }
>("appFooter/addFooter", async (data, { getState, dispatch }) => {
  const response = await axiosInstance.post<{ data: FooterItem }>(
    getEndpoint("footer"),
    data
  );

  if (response.data.data.parent > 0) {
    dispatch(fetchFooterSubMenu(getState().Footer.paramsFooterMenu));
  } else {
    dispatch(fetchFooter(getState().Footer.params));
  }

  return response.data.data;
});

export const editFooter = createAsyncThunk<
  FooterItem,
  { id: number; newData: Partial<FooterItem> },
  { state: RootState; dispatch: AppDispatch }
>("appFooter/editFooter", async ({ id, newData }, { getState, dispatch }) => {
  const response = await axiosInstance.put<{ data: FooterItem }>(
    `${getEndpoint("footer")}/${id}`,
    newData
  );

  if (response.data.data.parent > 0) {
    dispatch(fetchFooterSubMenu(getState().Footer.paramsFooterMenu));
  } else {
    dispatch(fetchFooter(getState().Footer.params));
  }

  return response.data.data;
});

export const deleteFooter = createAsyncThunk<
  { success: boolean; data: FooterItem },
  number,
  { state: RootState; dispatch: AppDispatch }
>("appFooter/deleteFooter", async (id, { getState, dispatch }) => {
  const response = await axiosInstance.delete<{
    success: boolean;
    data: FooterItem;
  }>(`${getEndpoint("footer")}/${id}`);

  if (response.data.data.parent > 0) {
    dispatch(fetchFooterSubMenu(getState().Footer.paramsFooterMenu));
  } else {
    dispatch(fetchFooter(getState().Footer.params));
  }

  return response.data;
});

// ===== Slice =====
export const appFooterSlice = createSlice({
  name: "appFooter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Footer list
    builder
      .addCase(fetchFooter.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFooter.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data.data;
        state.total = action.payload.data.recordsFiltered;
        state.params = action.meta.arg;
      });

    // Footer submenu
    builder
      .addCase(fetchFooterSubMenu.pending, (state) => {
        state.loadingFooterMenu = true;
      })
      .addCase(fetchFooterSubMenu.fulfilled, (state, action) => {
        state.loadingFooterMenu = false;
        state.dataFooterMenu = action.payload.data.data;
        state.totalFooterMenu = action.payload.data.recordsFiltered;
        state.paramsFooterMenu = action.meta.arg;
      });

    // Footer detail
    builder
      .addCase(fetchFooterById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFooterById.fulfilled, (state, action) => {
        state.loading = false;
        // Storing single footer in `data` array for now
        state.data = [action.payload.data];
      });
  },
});

export default appFooterSlice.reducer;
