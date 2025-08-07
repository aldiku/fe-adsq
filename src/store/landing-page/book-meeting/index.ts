import axiosInstance, { getEndpoint } from "@/utils/api/getApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchBookMeeting = createAsyncThunk("appBookMeeting/fetchBookMeeting", async (params: any) => {
  const response = await axiosInstance.get(getEndpoint('book_meeting'), { params });

  return response.data;
});

export const addBookMeeting = createAsyncThunk('lpBookMeeting/addBookMeeting', async (data: any,) => {
  const response = await axiosInstance.post(getEndpoint('book_meeting'), data)

  // dispatch(fetchBookMeeting(getState().menu.params))

  return response.data
})


const bookMeetingSlice = createSlice({
  name: "lpBookMeeting",
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookMeeting.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBookMeeting.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
      })
      .addCase(fetchBookMeeting.rejected, (state) => {
        state.isLoading = false;
      });

   
  },
});

export default bookMeetingSlice.reducer;
