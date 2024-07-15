import { combineReducers, configureStore , getDefaultMiddleware } from '@reduxjs/toolkit';
import excelLoaderReducer from './slices/excel-loader.slice';


const reducers = combineReducers({
  excel: excelLoaderReducer
});
const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export default store;
