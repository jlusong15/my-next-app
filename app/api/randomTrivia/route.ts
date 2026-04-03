import { RandomTriviaList, Trivia } from '@/app/types/randomTrivia.model';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(_req: NextRequest): Promise<NextResponse> {
	const randomTrivia: Trivia =
		RandomTriviaList[Math.floor(Math.random() * RandomTriviaList.length)];
	return NextResponse.json({ data: randomTrivia });
}