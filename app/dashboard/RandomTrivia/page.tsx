"use client"

import { useGlobalStore } from "@/app/store/useGlobalStore"
import { Spinner } from "@/components/ui/spinner"
import { useEffect } from "react"

export default function RandomTrivia() {
	const { trivia, fetchTrivia } = useGlobalStore()

	useEffect(() => {
		fetchTrivia()
	}, [fetchTrivia])

	if (trivia?.loading) return <Spinner className="mt-4" />
	if (!trivia || trivia?.error) return null

	return (
		<div className="p-2 text-center">
			{trivia && (
				<>
					<h3 className="text-lg font-semibold mb-2">Random Trivia</h3>
					<p className="text-gray-700">{trivia?.data?.fact ?? ""}</p>
				</>
			)}
		</div>
	)
}
