import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";

type NavItemType = {
	children: string;
	href: string;
};

export function NavItem({ children, href }: NavItemType) {
	const router = useRouter();
	const isActive = useMemo(() => router.pathname == href, [
		router.pathname,
		href
	]);

	return (
		<li
			className={`block px-4 py-2 rounded-md ${
				isActive ? "bg-green-100 text-green-700" : ""
			} `}
		>
			<Link href={href}>
				<a>{children}</a>
			</Link>
		</li>
	);
}

export default NavItem;
