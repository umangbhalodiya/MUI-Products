import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axios";

// This file contains the typescript interfaces for the ProductStoreStateTypes, ProductTypes, and ModalProps
export interface ProductStoreStateTypes {
  products: ProductTypes[];
  productItem: ProductTypes | {};
}
// ProductTypes interface represents the shape of the product object
export interface ProductTypes {
  id: number;
  title: string;
  image: string; // Assuming you have an image property as well
  price: number;
  description: string;
  quantity: number;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

type ApiResponse = ProductTypes[];
interface ApiError {
  message: string;
}

// ModalProps interface represents the props of the Modal component
export interface ModalProps {
  product: ProductTypes | null;
  onClose: () => void;
}

const initialState: ProductStoreStateTypes = {
  products: [],
  productItem: {},
};

export const fetchProducts = createAsyncThunk<
  ApiResponse,
  void,
  { rejectValue: ApiError }
>("/articalSlice/fetchArticles", async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get(`/products`);
    return response.data;
  } catch (e: any) {
    return rejectWithValue(e.response.data);
  }
});

export const fetchSingleProduct = createAsyncThunk<
  ApiResponse,
  void,
  { rejectValue: ApiError }
>("/articalSlice/fetchSingleProduct", async (id, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get(`/products/${id}`);
    return response.data;
  } catch (e: any) {
    return rejectWithValue(e.response.data);
  }
});

export const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    setProductState: (state: object, action) => {
      // setProductState is a reducer which is used to manage any state
      return { ...state, ...action.payload };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        // manage states when fetching data
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        // manage states when api returns data as response
        state.products = action?.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        // manage states when api throws error
      })
      .addCase(fetchSingleProduct.pending, (state) => {})
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.productItem = action?.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state) => {});
  },
});

export const { setProductState } = productSlice.actions;
export default productSlice.reducer;
