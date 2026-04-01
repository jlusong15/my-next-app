import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CircleCheck } from "lucide-react"
import { CollapsibleSection } from "../components/CollapsibleSection"
import { DatePicker } from "../components/DatePicker"
import { SelectDropdown } from "../components/Select"

export default function TasksPage() {
	const taskCategoryList = [
		{
			value: "story",
			display: "Story",
		},
		{
			value: "bug",
			display: "Bug",
		},
		{
			value: "support",
			display: "Support",
		},
	]
	const taskNameList = [
		{
			value: "planning",
			display: "Development Planning",
		},
		{
			value: "grooming",
			display: "Backlog Grooming",
		},
		{
			value: "review",
			display: "Sprint Review",
		},
	]
	const groupList = [
		{
			value: "dev",
			display: "Dev Team",
		},
		{
			value: "qa",
			display: "QA Team",
		},
		{
			value: "sr",
			display: "Senior/Lead",
		},
	]

	return (
		<div className="px-5">
			<div className="mb-5">
				<h4 className="font-bold">Add Task</h4>
			</div>
			<p>Task Category</p>
			<div className="my-2">
				<SelectDropdown placeholder="Select a task category..." items={taskCategoryList} />
			</div>

			<div className="pt-5 grid gap-y-5">
				<CollapsibleSection
					defaultOpen={true}
					triggerHeader={
						<span className="flex items-center text-sm">
							<CircleCheck className="mr-2.5 text-primary" /> Step1
						</span>
					}
				>
					<div className="px-10 mb-2.5 ml-3 border-l border-l-neutral-200">
						<div className="flex flex-col md:flex-row mx-5 pt-5 mb-5 gap-5">
							<div className="flex flex-col w-full md:w-1/2">
								<span className="mb-1 text-xs">Task Name</span>
								<SelectDropdown className="w-full" items={taskNameList} />
							</div>
							<div className="flex flex-col w-full md:w-1/2">
								<span className="mb-1 text-xs">Schedule</span>
								<DatePicker />
							</div>
						</div>

						<div className="flex flex-col md:flex-row mx-5 gap-5 pb-5">
							<div className="flex flex-col w-full md:w-1/2">
								<span className="mb-1 text-xs">Group</span>
								<SelectDropdown className="w-full" items={groupList} />
							</div>
							<div className="flex flex-col w-full md:w-1/2"></div>
						</div>
					</div>
				</CollapsibleSection>

				<CollapsibleSection defaultOpen={true} triggerHeader={<span className="items-center text-sm">Step2</span>}>
					<div className="px-10 mb-2.5 ml-3 border-l border-l-neutral-200">
						<div className="flex flex-col md:flex-row mx-5 gap-5">
							<div className="flex flex-col w-full md:w-1/2 pb-5 pr-md-0">
								<span className="mb-1 text-xs">Short Description</span>
								<Input className="w-full md:w-auto" />
							</div>
						</div>
						<div className="flex flex-col md:flex-row mx-5 gap-5">
							<div className="flex flex-col w-full md:w-1/2 pb-5 pr-md-0">
								<span className="mb-1 text-xs">Other Notes</span>
								<Textarea />
							</div>
						</div>
					</div>
				</CollapsibleSection>
			</div>
		</div>
	)
}
