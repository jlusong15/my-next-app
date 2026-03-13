import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "../components/Sidebar"
import { BreadcrumbBasic } from "../components/BreadcrumbBasic"
import Button from "../components/Button"
import { Calendar, CircleCheck, CircleDashed, CirclePlus, Logs, Timer } from "lucide-react"
import { Input } from "@/components/ui/input"
import { PopoverBasic } from "../components/Popover"
import { CollapsibleSection } from "../components/CollapsibleSection"

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

					<CollapsibleSection
						triggerHeader={
							<div className="flex justify-between">
								<span className="flex items-center text-xs mr-1.5">
									<Timer className="mr-1 size-5.25 text-neutral-500" /> Recent
								</span>
								<span className="flex items-center bg-neutral-200 rounded-[10px] text-xs px-2">5</span>
							</div>
						}
						className="mb-1"
					>
						<div className="p-3 mb-2.5 ml-3 border-l border-l-neutral-200">
							<div className="flex ml-1 mb-3">
								<ul className="list-disc ml-2 text-xs">
									<li>Lorem ipsum</li>
									<li>Lorem ipsum</li>
									<li>Lorem ipsum</li>
									<li>Lorem ipsum</li>
									<li>Lorem ipsum</li>
								</ul>
							</div>
						</div>
					</CollapsibleSection>

					<CollapsibleSection
						triggerHeader={
							<div className="flex justify-between">
								<span className="flex items-center text-xs mr-1.5">
									<Calendar className="mr-1 text-neutral-500 size-4.5" /> Schedule
								</span>
								<span className="flex items-center bg-neutral-200 rounded-[10px] text-xs px-2">2</span>
							</div>
						}
						className="mb-1"
					>
						<div className="p-3 mb-2.5 ml-3 border-l border-l-neutral-200 flex flex-col gap-3">
							<div className="flex justify-between ml-1 gap-5">
								<span className="flex items-center text-sm">
									<CircleCheck className="mr-1 text-success size-3.5" /> Deployment Time (3pm, Sat.)
								</span>
								<span className="flex items-center bg-neutral-200 rounded-[10px] text-xs px-2">12</span>
							</div>

							<div className="flex justify-between ml-1 gap-5">
								<span className="flex items-center text-sm">
									<CircleDashed className="mr-1 text-neutral-500 size-3.5" /> Monday 8:00am
								</span>
								<span className="flex items-center bg-neutral-200 rounded-[10px] text-xs px-2">9</span>
							</div>
						</div>
					</CollapsibleSection>

					<CollapsibleSection
						triggerHeader={
							<div className="flex justify-between">
								<span className="flex items-center text-xs mr-1.5">
									<Logs className="mr-1 text-neutral-500 size-4.5" /> Logs
								</span>
								<span className="flex items-center bg-neutral-200 rounded-[10px] text-xs px-2">3</span>
							</div>
						}
						className="mb-1"
					>
						<div className="p-3 mb-2.5 ml-3 border-l border-l-neutral-200">
							<div className="flex ml-1 mb-3">
								<ul className="list-disc ml-2 text-xs">
									<li>Lorem ipsum</li>
									<li>Lorem ipsum</li>
									<li>Lorem ipsum</li>
									<li>Lorem ipsum</li>
									<li>Lorem ipsum</li>
								</ul>
							</div>
						</div>
					</CollapsibleSection>
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
