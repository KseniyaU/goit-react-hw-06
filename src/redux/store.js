import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';
// import { persistStore } from "redux-persist";
// import { persistReducer } from "redux-persist";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist' 




export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filtersReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistedStore = persistStore(store)
// export default store;