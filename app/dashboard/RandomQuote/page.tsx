"use client"

import { useGlobalStore } from "@/store/useGlobalStore"
import { Spinner } from "@/components/ui/spinner"
import { useEffect } from "react"

export default function RandomQuote() {
	const { quote, fetchQuote } = useGlobalStore()

	useEffect(() => {
		fetchQuote()
	}, [fetchQuote])

	if (quote?.loading) return <Spinner className="mt-4" />
	if (!quote || quote?.error) return null

	return (
		<div className="text-center p-6">
			{quote && (
				<>
					<p className="text-xl italic">"{quote?.data?.text || ""}"</p>
					<p className="mt-2 text-sm text-gray-500">— {quote?.data?.author || ""}</p>
				</>
			)}
		</div>
	)
}
