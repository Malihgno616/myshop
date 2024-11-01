import { rootReducer } from "./root-reducer";
import { logger } from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";

// Define the state shape for the whole application
export type RootState = ReturnType<typeof rootReducer>;

// Create the store with the rootReducer and middleware
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
