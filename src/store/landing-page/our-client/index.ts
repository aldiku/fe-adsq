import axiosInstance, { getEndpoint } from "@/utils/api/getApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchOurClient = createAsyncThunk(
  "appOurClient/fetchOurClient",
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

const ourClientSlice = createSlice({
  name: "lpOurClient",
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOurClient.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOurClient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
      })
      .addCase(fetchOurClient.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default ourClientSlice.reducer;
