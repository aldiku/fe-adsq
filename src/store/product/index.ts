import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance, { getEndpoint } from "@/utils/api/getApi";

export const fetchProducts = createAsyncThunk("product/fetchProducts", async (params: any) => {
  const response = await axiosInstance.get(getEndpoint("product"), { params });

  return response.data;
});

export const fetchProductAll = createAsyncThunk("product/fetchProductAll", async () => {
  const response = await axiosInstance.get(getEndpoint("product"));

  console.log("fetchProductAll", response.data);

  return response.data;
});

export const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    isLoading: false,
    total: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
        state.total = action.payload.total;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchProductAll.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductAll.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchProductAll.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default productSlice.reducer;
