import axiosInstance, { getEndpoint } from "@/utils/api/getApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchImageSlider = createAsyncThunk("appImageSlider/fetchImageSlider", async () => {
  const response = await axiosInstance.get(getEndpoint('image_slider')+'/all');

  return response.data;
});

// export const addBookMeeting = createAsyncThunk('lpBookMeeting/addBookMeeting', async (data: any,) => {
//   const response = await axiosInstance.post(getEndpoint("testimonial"), data);

//   dispatch(fetchBookMeeting(getState().menu.params))

//   return response.data
// })


const imageSliderSlice = createSlice({
  name: "lpImageSlider",
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImageSlider.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchImageSlider.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
      })
      .addCase(fetchImageSlider.rejected, (state) => {
        state.isLoading = false;
      });

   
  },
});

export default imageSliderSlice.reducer;
