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
		href: "/stepper",
		name: "Stepper",
	},
]