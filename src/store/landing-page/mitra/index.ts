import axiosInstance, { getEndpoint } from "@/utils/api/getApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMitra = createAsyncThunk(
  "appMitra/fetchMitra",
  async (params: any) => {
    const response = await axiosInstance.get(getEndpoint("mitra") + "/all", {
      params,
    });

    return response.data;
  },
);

// export const addBookMeeting = createAsyncThunk('lpBookMeeting/addBookMeeting', async (data: any,) => {
//   const response = await axiosInstance.post(getEndpoint("mitra"), data);

//   dispatch(fetchBookMeeting(getState().menu.params))

//   return response.data
// })

const mitraSlice = createSlice({
  name: "lpMitra",
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMitra.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMitra.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
      })
      .addCase(fetchMitra.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default mitraSlice.reducer;
