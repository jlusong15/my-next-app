import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "../../components/shared/Sidebar"
import { BreadcrumbBasic } from "../../components/shared/BreadcrumbBasic"
import Button from "../../components/shared/Button"
import { Calendar, CircleCheck, CircleDashed, CirclePlus, Logs, Timer } from "lucide-react"
import { Input } from "@/components/ui/input"
import { PopoverBasic } from "../../components/shared/Popover"
import { CollapsibleSection } from "../../components/shared/CollapsibleSection"

export default function TasksLayout({ children }: { children: React.ReactNode }) {
	const taskBreadcrumb = [
		{
			link: "#",
			name: "Task",
		},
		{
			link: "",
			name: "Create Task",
		},
	]
	return (
		<div>
			{/* Sidebar */}
			<SidebarProvider>
				<AppSidebar className="pt-14 " />

				{/* Main content */}
				<main className="w-full p-2.5">
					<div className="bg-white border border-neutral-200 rounded-[10px]">
						{/* Header */}
						<div className="flex items-center p-5 border-b border-b-neutral-200">
							<div className="pr-3.75">
								<SidebarTrigger className="cursor-pointer" />
							</div>
							<div className="flex w-full px-3.75 border-l border-l-neutral-200 font-bold">
								<span className="font-bold">Add Task</span>
							</div>
						</div>
						{/* Breadcrumbs */}
						<div className="p-5">
							<BreadcrumbBasic items={taskBreadcrumb} className="text-xs!" />
						</div>
						{/* Content */}
						<div className="p-5">{children}</div>
					</div>
				</main>
			</SidebarProvider>
		</div>
	)
}
