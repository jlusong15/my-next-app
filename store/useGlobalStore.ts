import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { fetchRandomQuote } from '../services/randomQuote.service';
import { fetchRandomTrivia } from '../services/randomTrivia.service';
import { Quote } from '../types/randomQuote.model';
import { Trivia } from '../types/randomTrivia.model';

interface GlobalState {
	// --- Random Quote ---
	quote: {
		data: Quote | undefined;
		loading: boolean;
		error: string | null;
	},
	fetchQuote: () => Promise<void>;

	// --- Random Trivia ---
	trivia: {
		data: Trivia | undefined;
		loading: boolean;
		error: string | null;
	}
	fetchTrivia: () => Promise<void>;
}

export const useGlobalStore = create<GlobalState>()(
	devtools((set) => ({
		// --- Quote state ---
		quote: {
			data: undefined,
			loading: false,
			error: null,
		},
		fetchQuote: async () => {
			set((state) => ({
				quote: { ...state.quote, loading: true, error: null },
			}));
			try {
				const data = await fetchRandomQuote();
				set((state) => ({
					quote: { ...state.quote, data, loading: false },
				}));
			} catch (err: any) {
				set((state) => ({
					quote: { ...state.quote, error: err.message || 'Failed to fetch', loading: false },
				}));
			}
		},

		// --- Trivia state ---
		trivia: {
			data: undefined,
			loading: false,
			error: null,
		},
		fetchTrivia: async () => {
			set((state) => ({
				trivia: { ...state.trivia, loading: true, error: null },
			}));
			try {
				const data = await fetchRandomTrivia();
				set((state) => ({
					trivia: { ...state.trivia, data, loading: false },
				}));
			} catch (err: any) {
				set((state) => ({
					trivia: { ...state.trivia, error: err.message || 'Failed to fetch', loading: false },
				}));
			}
		},
	}), { name: 'zGlobalStore' })
);