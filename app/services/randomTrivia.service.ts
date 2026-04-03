import { Trivia } from "../types/randomTrivia.model";

export async function fetchAllTrivia(): Promise<Trivia[]> {
	try {
		const res = await fetch('/api/randomTrivia/all');
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

export async function fetchRandomTrivia(): Promise<Trivia | undefined> {
	try {
		const res = await fetch('/api/randomTrivia');
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