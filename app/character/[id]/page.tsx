"use client"

import { useParams } from "next/navigation"

export default function ViewCharacter() {
  const params = useParams<{ id: string }>()

  return (
    <div>
      <h1>Character ID</h1>
      <p>ID: {params.id}</p>
    </div>
  )
}