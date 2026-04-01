"use client"

import { useEffect, useState } from "react"
import { randomQuotesList } from "./data"

export default function RandomQuote() {
	const [randomQuote, setRandomQuote] = useState<any>(null)

	useEffect(() => {
		const quote = randomQuotesList[Math.floor(Math.random() * randomQuotesList.length)]
		setRandomQuote(quote)
	}, [])

	if (!randomQuote) return null

	return (
		<div className="text-center p-6">
			{randomQuote && (
				<>
					<p className="text-xl italic">"{randomQuote?.quote || ""}"</p>
					<p className="mt-2 text-sm text-gray-500">— {randomQuote?.author || ""}</p>
				</>
			)}
		</div>
	)
}
