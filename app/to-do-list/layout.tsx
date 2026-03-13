import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "../components/Sidebar"

export default function ToDoListLayout({ children }: { children: React.ReactNode }) {
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
								<span className="font-bold">Send me a message</span>
							</div>
						</div>

						{/* Content */}
						<div className="p-5">{children}</div>
					</div>
				</main>
			</SidebarProvider>
		</div>
	)
}
