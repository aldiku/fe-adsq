import axiosInstance, { getEndpoint } from "@/utils/api/getApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchTestimonial = createAsyncThunk("appTestimonial/fetchTestimonial", async () => {
  const response = await axiosInstance.get(getEndpoint('testimonial')+'/all');

  return response.data;
});

// export const addBookMeeting = createAsyncThunk('lpBookMeeting/addBookMeeting', async (data: any,) => {
//   const response = await axiosInstance.post(getEndpoint("testimonial"), data);

//   dispatch(fetchBookMeeting(getState().menu.params))

//   return response.data
// })


const testimonialSlice = createSlice({
  name: "lpTestimonial",
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestimonial.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTestimonial.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
      })
      .addCase(fetchTestimonial.rejected, (state) => {
        state.isLoading = false;
      });

   
  },
});

export default testimonialSlice.reducer;
