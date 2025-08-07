import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance, { getEndpoint } from "@/utils/api/getApi";

// interface Redux {
//   getState: any;
//   dispatch: Dispatch<any>;
// }

export const fetchSubCategories = createAsyncThunk("subCategory/fetchSubCategories", async (params: any) => {
  const response = await axiosInstance.get(getEndpoint("subCategory"), { params });

  return response.data;
});

export const fetchSubCategoryAll = createAsyncThunk("subCategory/fetchSubCategoryAll", async () => {
  const response = await axiosInstance.get(getEndpoint("subCategory"));

  return response.data;
});

const subCategorySlice = createSlice({
  name: "subCategory",
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSubCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
      })
      .addCase(fetchSubCategories.rejected, (state) => {
        state.isLoading = false;
      });

    builder
      .addCase(fetchSubCategoryAll.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSubCategoryAll.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchSubCategoryAll.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default subCategorySlice.reducer;
