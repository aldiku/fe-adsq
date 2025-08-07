import axiosInstance, { getEndpoint } from "@/utils/api/getApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchStepPlaceAdsAll = createAsyncThunk("appStepPlaceAds/fetchStepPlaceAdsAll", async () => {
  const response = await axiosInstance.get(getEndpoint("step_place_ads") + "/all");

  return response.data;
});

// export const addBookMeeting = createAsyncThunk('lpBookMeeting/addBookMeeting', async (data: any,) => {
//   const response = await axiosInstance.post(getEndpoint("testimonial"), data);

//   dispatch(fetchBookMeeting(getState().menu.params))

//   return response.data
// })


const testimonialSlice = createSlice({
  name: "lpStepPlaceAds",
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStepPlaceAdsAll.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchStepPlaceAdsAll.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
      })
      .addCase(fetchStepPlaceAdsAll.rejected, (state) => {
        state.isLoading = false;
      });

   
  },
});

export default testimonialSlice.reducer;
