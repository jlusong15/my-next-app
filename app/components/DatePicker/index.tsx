"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
interface DatePickerProps {
	onValueChange?: (value: string) => void
	placeholder?: string
	testId?: string
	[key: string]: any
}

export function DatePicker({ className, placeholder, testId, onValueChange, ...props }: DatePickerProps) {
	const [date, setDate] = React.useState<Date>()

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					data-testid={testId}
					data-empty={!date}
					className={cn(
						className ?? "",
						"rounded-sm w-full justify-start text-left font-normal data-[empty=true]:text-muted-foreground bg-white hover:bg-white",
					)}
				>
					<CalendarIcon />
					{date ? format(date, "PP") : <span>{placeholder || "Select Date"}</span>}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0">
				<Calendar mode="single" selected={date} onSelect={setDate} />
			</PopoverContent>
		</Popover>
	)
}
