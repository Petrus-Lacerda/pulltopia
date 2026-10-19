import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface walletState {
    balance: number
}

const initialState: walletState = {
    balance: 10
}

const walletSlice = createSlice({
    name: "wallet",
    initialState,
    reducers: {
        addmoney: (state, action: PayloadAction<number>) => { state.balance += action.payload }
    }
})

export default walletSlice.reducer