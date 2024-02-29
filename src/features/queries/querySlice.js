import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    queryList: []
}

export const querySlice = createSlice({
    name: 'queryList',
    initialState,
    reducers: {
        addQuery: (state, action) => {
            if(state.queryList.length >= 5){
                state.queryList.splice(0, 1)
            }
            state.queryList.push(action.payload);
        }
    }
});

export const { addQuery } = querySlice.actions;
export default querySlice.reducer;