import axiosInstance, { getEndpoint } from "@/utils/api/getApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchContactUs = createAsyncThunk("appContactUs/fetchContactUs", async (params: any) => {
  const response = await axiosInstance.get(getEndpoint('contact_us'), { params });

  return response.data;
});

export const addContactUs = createAsyncThunk('lpContactUs/addContactUs', async (data: any,) => {
  const response = await axiosInstance.post(getEndpoint('contact_us'), data)

  // dispatch(fetchContactUs(getState().menu.params))

  return response.data
})


const bookMeetingSlice = createSlice({
  name: "lpContactUs",
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactUs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContactUs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
      })
      .addCase(fetchContactUs.rejected, (state) => {
        state.isLoading = false;
      });

   
  },
});

export default bookMeetingSlice.reducer;
