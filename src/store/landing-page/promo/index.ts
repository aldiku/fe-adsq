import axiosInstance, { getEndpoint } from "@/utils/api/getApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPromo = createAsyncThunk("appPromo/fetchPromo", async () => {
  const response = await axiosInstance.get(getEndpoint("promo"));

  return response.data;
});

export const fetchPromoID = createAsyncThunk(
  "appPromo/fetchPromoID",
  async (id: any) => {
    const response = await axiosInstance.get(getEndpoint("promo") + "/" + id);

    return response.data;
  },
);

// export const addBookMeeting = createAsyncThunk('lpBookMeeting/addBookMeeting', async (data: any,) => {
//   const response = await axiosInstance.post(getEndpoint("aboutMe"), data);

//   dispatch(fetchBookMeeting(getState().menu.params))

//   return response.data
// })

const aboutMeSlice = createSlice({
  name: "lpPromo",
  initialState: {
    data: [],
    isLoading: false,

    dataID: {},
    isLoadingID: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPromo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPromo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
      })
      .addCase(fetchPromo.rejected, (state) => {
        state.isLoading = false;
      });

    builder
      .addCase(fetchPromoID.pending, (state) => {
        state.isLoadingID = true;
      })
      .addCase(fetchPromoID.fulfilled, (state, action) => {
        state.isLoadingID = false;
        state.dataID = action.payload.data;
      })
      .addCase(fetchPromoID.rejected, (state) => {
        state.isLoadingID = false;
      });
  },
});

export default aboutMeSlice.reducer;
