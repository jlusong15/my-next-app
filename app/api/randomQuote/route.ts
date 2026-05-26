import { Quote, RandomQuotesList } from '@/types/randomQuote.model';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(_req: NextRequest): Promise<NextResponse> {
	const randomQuote: Quote =
		RandomQuotesList[Math.floor(Math.random() * RandomQuotesList.length)];
	return NextResponse.json({ data: randomQuote });
}