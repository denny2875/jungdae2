import { configureStore } from '@reduxjs/toolkit';
import { moneySlice } from './MoneySlice';


export const store = configureStore({
    reducer: {
        money: moneySlice.reducer,
    }
});
