export interface NavModel {
	href: string;
	name: string;
	current?: boolean;
}

export const NavLinks: NavModel[] = [
	{
		href: "/",
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
]