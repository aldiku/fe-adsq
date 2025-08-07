import axiosInstance, { getEndpoint } from "@/utils/api/getApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchConsultation = createAsyncThunk("appConsultation/fetchConsultation", async (params: any) => {
  const response = await axiosInstance.get(getEndpoint('landing_page') + '/consultation', { params });

  return response.data;
});

export const addConsultation = createAsyncThunk('lpConsultation/addConsultation', async (data: any,) => {
  const response = await axiosInstance.post(getEndpoint('landing_page') + '/consultation', data)

  // dispatch(fetchConsultation(getState().menu.params))

  return response.data
})


const consultationSlice = createSlice({
  name: "lpConsultation",
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchConsultation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchConsultation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
      })
      .addCase(fetchConsultation.rejected, (state) => {
        state.isLoading = false;
      });

   
  },
});

export default consultationSlice.reducer;
