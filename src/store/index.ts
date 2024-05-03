import { configureStore } from '@reduxjs/toolkit';
import documentReducer from './slice/slice-document';

const store = configureStore({
    reducer: {
        document: documentReducer,
    },
});

export default store;