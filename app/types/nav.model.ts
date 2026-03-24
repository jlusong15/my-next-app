export interface NavModel {
	href: string;
	name: string;
	current?: boolean;
}

export const NavLinks: NavModel[] = [
	{
		href: "/dashboard",
		name: "Dashboard",
	},
	{
		href: "/tasks",
		name: "My Tasks",
	},
	{
		href: "/stepper",
		name: "Stepper",
	},
	{
		href: "/to-do-list",
		name: "To Do",
	},
	{
		href: "/contact",
		name: "Contact Me",
	},
]