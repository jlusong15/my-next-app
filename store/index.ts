import api from '@/lib/api';
import { configureStore } from '@reduxjs/toolkit';
import browse from './slices/browse';
import dashboard from './slices/dashboard';
import stepper from './slices/stepper';

export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
		browse,
		stepper,
		dashboard
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
