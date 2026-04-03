"use client"

import { fetchRandomQuote } from "@/app/services/randomQuote.service"
import { Quote } from "@/app/types/randomQuote.model"
import { Spinner } from "@/components/ui/spinner"
import { useEffect, useState } from "react"

export default function RandomQuote() {
	const [randomQuote, setRandomQuote] = useState<Quote | undefined>(undefined)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		getQuotes()
	}, [])

	async function getQuotes() {
		const result = await fetchRandomQuote()
		setRandomQuote(result)
		setIsLoading(false)
	}

	if (isLoading) return <Spinner className="mt-4" />
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
