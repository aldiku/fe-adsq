import axiosInstance, { getEndpoint } from "@/utils/api/getApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchService = createAsyncThunk(
  "appService/fetchService",
  async () => {
    const response = await axiosInstance.get(getEndpoint("service") + "/all");

    return response.data;
  },
);

// export const addBookMeeting = createAsyncThunk('lpBookMeeting/addBookMeeting', async (data: any,) => {
//   const response = await axiosInstance.post(getEndpoint("Service"), data);

//   dispatch(fetchBookMeeting(getState().menu.params))

//   return response.data
// })

const ServiceSlice = createSlice({
  name: "lpService",
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchService.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
      })
      .addCase(fetchService.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default ServiceSlice.reducer;
