import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import counteReducer from './counter';

const store = configureStore({
  reducer: {
    counter: counteReducer,
    auth: authReducer,
  },
});

export default store;
