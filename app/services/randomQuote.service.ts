import { Quote } from "../types/randomQuote.model";

export async function fetchAllQuotes(): Promise<Quote[]> {
	try {
		const res = await fetch('/api/randomQuote/all');
		if (!res.ok) {
			throw new Error(`API error: ${res.status}`);
		}
		const data = await res.json();

		return data.data ?? [];
	} catch (err) {
		console.error('Failed to fetch: ', err);
		return [];
	}
}

export async function fetchRandomQuote(): Promise<Quote | undefined> {
	try {
		const res = await fetch('/api/randomQuote');
		if (!res.ok) {
			throw new Error(`API error: ${res.status}`);
		}
		const data = await res.json();

		return data.data ?? [];
	} catch (err) {
		console.error('Failed to fetch: ', err);
		return undefined;
	}
}