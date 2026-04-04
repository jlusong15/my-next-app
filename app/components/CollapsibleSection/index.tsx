import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"
import { ChevronDownIcon } from "lucide-react"

interface CollapsibleSectionProps {
	triggerHeader: React.ReactNode
	defaultOpen?: boolean
	className?: string
	testId?: string
	[key: string]: any
}

export function CollapsibleSection({
	children,
	className,
	items,
	triggerHeader,
	defaultOpen = false,
	testId,
	...props
}: CollapsibleSectionProps) {
	const dataTestId = testId ?? `collapsible-${Math.floor(Math.random() * 90000) + 10000}`
	return (
		<>
			<Collapsible className={cn(className ?? "")} defaultOpen={defaultOpen}>
				<CollapsibleTrigger className="group w-full cursor-pointer" data-testid={dataTestId + "-trigger"}>
					<div className="flex mb-2.5 justify-between items-center">
						<>{triggerHeader}</>
						<div>
							<ChevronDownIcon className="ml-auto group-data-[state=open]:rotate-180 size-4 text-neutral-500" />
						</div>
					</div>
				</CollapsibleTrigger>
				<CollapsibleContent data-testid={dataTestId + "-content"}>{children}</CollapsibleContent>
			</Collapsible>
		</>
	)
}
