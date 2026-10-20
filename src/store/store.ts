
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import walletReducer from "./slices/walletSlice";
import packsReducer from "./slices/packsSlice";
import collectionReducer from "./slices/collectionSlice";

const rootReducer = combineReducers({
    wallet: walletReducer,
    packs: packsReducer,
    collection: collectionReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const STORAGE_KEY = "pulltopia-save";

function loadState(): Partial<RootState> | undefined {
    try {
        const savedState = localStorage.getItem(STORAGE_KEY);

        if (savedState === null) {
            return undefined;
        }

        const parsed: unknown = JSON.parse(savedState);

        if (
            typeof parsed !== "object" ||
            parsed === null ||
            Array.isArray(parsed)
        ) {
            return undefined;
        }

        return parsed as Partial<RootState>;
    } catch (error) {
        console.error("Failed to load save:", error);
        return undefined;
    }
}

export const store = configureStore({
    reducer: rootReducer,
    preloadedState: loadState()
});

const saveState = () => {
    try {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(store.getState())
        );
    } catch (error) {
        console.error("Failed to save progress:", error);
    }
};

store.subscribe(saveState);

saveState();

export type AppDispatch = typeof store.dispatch;
