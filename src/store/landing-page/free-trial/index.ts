import axiosInstance, { getEndpoint } from "@/utils/api/getApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchFreeTrial = createAsyncThunk(
  "appFreeTrial/fetchFreeTrial",
  async (params: any) => {
    const response = await axiosInstance.get(getEndpoint("free_trial"), {
      params,
    });

    return response.data;
  },
);

export const addFreeTrial = createAsyncThunk(
  "lpFreeTrial/addFreeTrial",
  async (data: any) => {
    const response = await axiosInstance.post(getEndpoint("free_trial"), data);

    // dispatch(fetchFreeTrial(getState().menu.params))

    return response.data;
  },
);

const freeTrialSlice = createSlice({
  name: "lpFreeTrial",
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFreeTrial.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFreeTrial.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
      })
      .addCase(fetchFreeTrial.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default freeTrialSlice.reducer;
