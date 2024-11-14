import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    list: [],
    total: 0
};

const calc = (list) => {
    let total = 0;
    list.map(item => {
        if (item.type === '수입') {
            total = total + Number(item.price);
        } else if (item.type === '지출') {
            total = total - Number(item.price);
        }
    });
    return total;
}

export const moneySlice = createSlice({
    name: "memberSlice",
    initialState,
    reducers: {
        add: (state, action) => {
            let id = 0;
            if (state.list.length > 0) {
                id = state.list.length;
            }
            action.payload["id"] = id;
            state.list.push(action.payload);
            state.total = calc(state.list);
        },
        remove: (state, action) => {
            state.list = state.list.filter(m => {
                return m.id !== action.payload
            });
            state.total = calc(state.list);
        }
    }
});

export const { add, remove } = moneySlice.actions;