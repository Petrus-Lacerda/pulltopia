import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface packsState {
    packs: number,
    totalpacks: number
}

const initialState: packsState = {
    packs: 0,
    totalpacks: 0
}

const packsSlice = createSlice({
    name: "packs",
    initialState,
    reducers: {
        setpack: (state, action: PayloadAction<number>) => { state.packs = action.payload },
        addpack: (state, action: PayloadAction<number>) => { state.packs += action.payload },
        removepack: (state, action: PayloadAction<number>) => { state.packs -= action.payload },
        totaladdpack: (state, action: PayloadAction<number>) => { state.totalpacks += action.payload },
        totalremovepack: (state, action: PayloadAction<number>) => { state.totalpacks -= action.payload }
    }
})
export const { setpack, addpack, removepack, totaladdpack, totalremovepack } = packsSlice.actions
export default packsSlice.reducer