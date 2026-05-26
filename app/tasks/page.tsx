import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CircleCheck } from "lucide-react"
import { CollapsibleSection } from "../../components/shared/CollapsibleSection"
import { DatePicker } from "../../components/shared/DatePicker"
import { SelectDropdown } from "../../components/shared/Select"
import { TaskGroupList, TaskCategoryList, TaskNameList } from "../../types/tasks.model"

export default function TasksPage() {
	return (
		<div className="px-5">
			<div className="mb-5">
				<h4 className="font-bold">Add Task</h4>
			</div>
			<p>Task Category</p>
			<div className="my-2">
				<SelectDropdown testId="task-category" placeholder="Select a task category..." items={TaskCategoryList} />
			</div>

			<div className="pt-5 grid gap-y-5">
				<CollapsibleSection
					testId="task-step1"
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
								<label className="mb-1 text-xs">Task Name</label>
								<SelectDropdown testId="task-name" className="w-full" items={TaskNameList} />
							</div>
							<div className="flex flex-col w-full md:w-1/2">
								<label className="mb-1 text-xs">Schedule</label>
								<DatePicker testId="task-date" />
							</div>
						</div>

						<div className="flex flex-col md:flex-row mx-5 gap-5 pb-5">
							<div className="flex flex-col w-full md:w-1/2">
								<label className="mb-1 text-xs">Group</label>
								<SelectDropdown testId="task-group" className="w-full" items={TaskGroupList} />
							</div>
							<div className="flex flex-col w-full md:w-1/2"></div>
						</div>
					</div>
				</CollapsibleSection>

				<CollapsibleSection
					testId="task-step2"
					defaultOpen={true}
					triggerHeader={<span className="items-center text-sm">Step2</span>}
				>
					<div className="px-10 mb-2.5 ml-3 border-l border-l-neutral-200">
						<div className="flex flex-col md:flex-row mx-5 gap-5">
							<div className="flex flex-col w-full md:w-1/2 pb-5 pr-md-0">
								<label className="mb-1 text-xs">Short Description</label>
								<Input testId="task-shortDescription" className="w-full md:w-auto" />
							</div>
						</div>
						<div className="flex flex-col md:flex-row mx-5 gap-5">
							<div className="flex flex-col w-full md:w-1/2 pb-5 pr-md-0">
								<label className="mb-1 text-xs">Other Notes</label>
								<Textarea testId="task-note" />
							</div>
						</div>
					</div>
				</CollapsibleSection>
			</div>
		</div>
	)
}
