import axiosInstance, { getEndpoint } from "@/utils/api/getApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchAboutMeAll = createAsyncThunk("appAboutMe/fetchAboutMeAll", async () => {
  const response = await axiosInstance.get(getEndpoint("about_me") + "/all");

  return response.data;
});

// export const addBookMeeting = createAsyncThunk('lpBookMeeting/addBookMeeting', async (data: any,) => {
//   const response = await axiosInstance.post(getEndpoint("aboutMe"), data);

//   dispatch(fetchBookMeeting(getState().menu.params))

//   return response.data
// })


const aboutMeSlice = createSlice({
  name: "lpAboutMe",
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAboutMeAll.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAboutMeAll.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
      })
      .addCase(fetchAboutMeAll.rejected, (state) => {
        state.isLoading = false;
      });

   
  },
});

export default aboutMeSlice.reducer;
