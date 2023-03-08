import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    name: '',
    deposit: '',
    balance: '',
    logo: null,
    attempts: [],
    sum : 0,
    result: [],
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserLogo: (state, action) => {
            state.logo = action.payload
        },
        setUserName: (state, action ) => {
            state.name = action.payload
        },
        setUserDeposit: (state, action) => {
            state.deposit = action.payload
            state.balance = action.payload
        },
        startGame: (state, action) => {
            state.balance = (state.balance * 10  - action.payload * 10) / 10 ;
        },
        winGame: (state, action) => {
            state.balance = (state.balance * 10 + action.payload * 10) / 10;
        },
        addAttempts: (state, action) => {
            state.attempts = state.attempts.concat(action.payload)
        },
        addSumAttemts: (state, action) => {
            state.sum = (state.sum * 10 + action.payload * 10) / 10
        },
        addResult: (state, action) => {
            state.sum = 0
            state.result = state.result.concat(action.payload)
        },
        deleteAttempts: (state) => {
            // state.result = state.result.concat(state.attempts)
            state.attempts = []
        },
        tryAgainGame: (state) => {
            state.name = ''
            state.deposit = ''
            state.balance = ''
            state.logo = null
            state.attempts = []
            state.result = []
    
        },

    }
});

export const { 
    setUserLogo, 
    setUserName, 
    setUserDeposit, 
    startGame, 
    winGame, 
    attemts, 
    addAttempts, 
    deleteAttempts, 
    tryAgainGame,
    addSumAttemts, 
    addResult } = userSlice.actions;

export default userSlice.reducer;