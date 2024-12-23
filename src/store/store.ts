import { configureStore } from '@reduxjs/toolkit';
import nameChangerReducer from './name_changer/nameChangerSlice';

// Example slice (you can add your own slices here)
const store = configureStore({
  reducer: {
    nameChanger: nameChangerReducer,
  },
});

export default store;