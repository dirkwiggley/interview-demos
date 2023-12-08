import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const demoStore = configureStore({
  reducer: {
    counter: counterReducer,
  }
});

export type RootState = ReturnType<typeof demoStore.getState>;
export type AppDispatch = typeof demoStore.dispatch;