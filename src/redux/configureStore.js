import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";


const initialState = {
    contacts: {
        item: []
    },
    filters: {
        name: ""
    }
}

const rootReducer = (state=initialState, action) => {
    return state;
}

export const store = createStore(rootReducer, devToolsEnhancer());