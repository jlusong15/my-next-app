import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import Button from "../Button"
import { CirclePlus } from "lucide-react"

export function AppSidebar() {
  return (
    <Sidebar className="pt-10.5 pl-2 group-data-[side=left]:border-r-0">
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
					<Button><CirclePlus className="mr-1" />Add Task</Button>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}