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
        setmoney: (state, action: PayloadAction<number>) => { state.balance = action.payload },
        addmoney: (state, action: PayloadAction<number>) => { state.balance += action.payload },
        removemoney: (state, action: PayloadAction<number>) => { state.balance -= action.payload },
    }
})

export const { addmoney, removemoney, setmoney } = walletSlice.actions
export default walletSlice.reducer