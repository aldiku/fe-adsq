import axiosInstance, { getEndpoint } from "@/utils/api/getApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchReasonsForAdsAll = createAsyncThunk("appReasonsForAds/fetchReasonsForAdsAll", async () => {
  const response = await axiosInstance.get(getEndpoint("reason_for_ads") + "/all");

  return response.data;
});

// export const addBookMeeting = createAsyncThunk('lpBookMeeting/addBookMeeting', async (data: any,) => {
//   const response = await axiosInstance.post(getEndpoint("reasonForAds"), data);

//   dispatch(fetchBookMeeting(getState().menu.params))

//   return response.data
// })


const reasonForAdsSlice = createSlice({
  name: "lpReasonsForAds",
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReasonsForAdsAll.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchReasonsForAdsAll.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
      })
      .addCase(fetchReasonsForAdsAll.rejected, (state) => {
        state.isLoading = false;
      });

   
  },
});

export default reasonForAdsSlice.reducer;
