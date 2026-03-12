"use client"

import { useParams } from "next/navigation"

export default function ViewGroupCharacter() {
	const params = useParams<{ groupId: string; characterId: string }>()

	if (!params) return <p>Loading...</p>

	const { groupId, characterId } = params

	return (
		<div>
			<h1>Character Page</h1>
			<p>Group ID: {groupId}</p>
			<p>Character ID: {characterId}</p>
		</div>
	)
}
