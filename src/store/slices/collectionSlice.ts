import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface collectionState {
    collection: object
}

const initialState: collectionState = {
    collection: {}
}

const collectionSlice = createSlice({
    name: "collection",
    initialState,
    reducers: {
        setcollection: (state, action: PayloadAction<object>) => { state.collection = action.payload },
        addcollection: (state, action: PayloadAction<object>) => { state.collection = action.payload },
        removecollection: (state, action: PayloadAction<object>) => { state.collection = action.payload },
    }
})

export const { setcollection, addcollection, removecollection } = collectionSlice.actions
export default collectionSlice.reducer