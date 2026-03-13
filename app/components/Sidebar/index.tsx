import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import DefaultSidebar from "./default-sidebar"

interface SidebarProps {
	header?: React.ReactNode
	footer?: React.ReactNode
	className?: string
	[key: string]: any
}

export function AppSidebar({ children, className, header, footer }: SidebarProps) {
	return (
		<Sidebar className={cn("pl-2 group-data-[side=left]:border-r-0", className ?? "")}>
			{header && <SidebarHeader></SidebarHeader>}

			<SidebarContent>
				<SidebarGroup />
				{children ?? <DefaultSidebar />}
				<SidebarGroup />
			</SidebarContent>

			{footer && <SidebarFooter></SidebarFooter>}
		</Sidebar>
	)
}
