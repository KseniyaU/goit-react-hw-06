import { createSlice } from "@reduxjs/toolkit";
import { persistReducer,persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: 
        {abs:[{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },]}
     ,
            
    reducers: {
        addContact: (state, action) => {
            state.abs.push(action.payload) 
        },
        deleteContact: (state, action) => {
            state.abs = state.abs.filter(contact => contact.id !== action.payload);
        },
    },
})

export const { addContact, deleteContact } = contactsSlice.actions;

const persistConfig = {
  key: 'contacts',
  storage,
}
export const contactsReducer = persistReducer(
    persistConfig, 
    contactsSlice.reducer
)

