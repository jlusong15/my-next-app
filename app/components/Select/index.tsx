import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

interface SelectDropdownItemModel {
	value: string
	display: string
	className?: string
}

type SelectDropdownListModel = SelectDropdownItemModel[]

interface SelectDropdownProps {
	placeholder?: string
	items: SelectDropdownListModel // your array of items
	[key: string]: any // for ...props if you want to allow any extra props
}

export function SelectDropdown({ className, items, placeholder, ...props }: SelectDropdownProps) {
	return (
		<>
			<Select>
				<SelectTrigger className="hidden w-full rounded-lg sm:ml-auto sm:flex" aria-label="Select a value">
					<SelectValue placeholder={placeholder ?? "Select"} />
				</SelectTrigger>
				<SelectContent className="rounded-xl">
					{items?.map((item, index) => (
						<SelectItem value={item.value} className={cn("rounded-lg", item.className ?? "")} key={index}>
							{item.display || ""}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</>
	)
}
