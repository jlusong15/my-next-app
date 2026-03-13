import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "../components/Sidebar"
import { BreadcrumbBasic } from "../components/BreadcrumbBasic"
import Button from "../components/Button"
import { CirclePlus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { PopoverBasic } from "../components/Popover"

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
				<AppSidebar className="pt-14 ">
					<Button>
						<CirclePlus className="mr-1" />
						Add Task
					</Button>

					<div className="my-2.5 flex gap-x-1 justify-between">
						<div className="w-full">
							<Input placeholder="Find Task..." className="bg-white text-xs!" />
						</div>

						<div>
							<PopoverBasic titleContent="Filter">Add Filters here</PopoverBasic>
						</div>
					</div>
				</AppSidebar>

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
