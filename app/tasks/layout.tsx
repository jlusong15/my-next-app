import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "../components/Sidebar"

export default function TasksLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<SidebarProvider>
				<AppSidebar />
				<main>
					<SidebarTrigger />
					{children}
				</main>
			</SidebarProvider>
		</>
	)
}
