import { RandomQuotesList } from '@/app/types/randomQuote.model';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(_req: NextRequest): Promise<NextResponse> {
	return NextResponse.json({ data: RandomQuotesList });
}