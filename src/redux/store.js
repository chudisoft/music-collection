import { configureStore } from '@reduxjs/toolkit';
import musiclistReducer from './musiclist/musiclistSlice';
import categoriesReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    musiclist: musiclistReducer,
  },
});

export default store;
