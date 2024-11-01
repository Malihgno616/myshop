import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./root-reducer";
import { logger } from "redux-logger";

// Define the state shape for the whole application
export type RootState = ReturnType<typeof rootReducer>;

// Create the store with the rootReducer and middleware
export const store = createStore(rootReducer, applyMiddleware(logger));
