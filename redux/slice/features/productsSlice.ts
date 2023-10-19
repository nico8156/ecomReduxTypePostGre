import { Product, User } from '@/types/globalTypes';
import { createSlice } from '@reduxjs/toolkit'

interface StoreState {
  productData: Product[];
  allProducts: Product[];
  userInfo: null | User;
}

const initialState: StoreState = {
    productData:[],
    allProducts: [],
    userInfo: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.productData.find(
        (item:Product) => item.id === action.payload.id
      );
      if(existingProduct){
        existingProduct.quantity += action.payload.quantity
      }else{
        state.productData.push(action.payload);
      }
    },
    removeFromCart: (state, action) =>{
        state.productData = state.productData.filter((item: Product) => 
          item.id !== action.payload.id)
    },
    increaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item: Product) => item.id === action.payload.id);
        
        existingProduct && existingProduct.quantity++;
    },
    decreaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item: Product) => item.id === action.payload.id);
        if(existingProduct?.quantity === 1){
          existingProduct.quantity = 1
        } else {
          existingProduct!.quantity--;
        }
    },
    clearCart: (state) => {
      state.productData = []
    },
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    }
  },
});


export const { addToCart, clearCart, removeFromCart, increaseQuantity, decreaseQuantity, setAllProducts } = productsSlice.actions;

export default productsSlice.reducer;