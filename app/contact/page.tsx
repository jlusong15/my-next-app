"use client"

import { toast } from "sonner"
import Button from "../components/Button"
import dynamic from "next/dynamic"
import React from "react";

export default function Contact() {
// Import Froala editor dynamically (no SSR)
	const FroalaEditor = dynamic(() => import('react-froala-wysiwyg'), { ssr: false });
	const froalaConfig = {
		height: 300,
		// minHeight: 200,
		// maxHeight: 600,
		// toolbarButtons: ['bold', 'italic', 'underline'],
		inlineMode: false, // important
	}
	const [isLoading, setIsLoading] = React.useState<boolean>(false)
	const [message, setMessage] = React.useState<string>("")

	const handleSend = () => {
		setIsLoading(true)
		setTimeout(() => {
			toast.success("Thank you for leave a message, however this is only a test contact form.", {
				position: "bottom-center",
			})
			setIsLoading(false)
		}, 3000)
	}

	return (
		<div className="w-full px-5 mt-3">
			<div className="w-full mb-4">
				<FroalaEditor tag="textarea" model={message} onModelChange={setMessage} config={froalaConfig} />
			</div>
			<div className="flex justify-end">
				<Button isLoading={isLoading} onClick={handleSend} disabled={!message}>
					Send
				</Button>
			</div>
		</div>
	)
}
