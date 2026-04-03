"use client"

import { fetchRandomTrivia } from "@/app/services/randomTrivia.service"
import { Spinner } from "@/components/ui/spinner"
import { useEffect, useState } from "react"

export default function RandomTrivia() {
	const [randomTrivia, setRandomTrivia] = useState<any>(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		getQuotes()
	}, [])

	async function getQuotes() {
		const result = await fetchRandomTrivia()
		setRandomTrivia(result)
		setIsLoading(false)
	}

	if (isLoading) return <Spinner className="mt-4" />
	if (!randomTrivia) return null

	return (
		<div className="p-2 text-center">
			{randomTrivia && (
				<>
					<h3 className="text-lg font-semibold mb-2">Random Trivia</h3>
					<p className="text-gray-700">{randomTrivia.fact ?? ""}</p>
				</>
			)}
		</div>
	)
}
