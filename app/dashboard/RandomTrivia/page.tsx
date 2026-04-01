"use client"

import { useEffect, useState } from "react"
import { randomTriviaList } from "./data"

export default function RandomTrivia() {
	const [randomTrivia, setRandomTrivia] = useState<any>(null)

	useEffect(() => {
		const trivia = randomTriviaList[Math.floor(Math.random() * randomTriviaList.length)]
		setRandomTrivia(trivia)
	}, [])

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
