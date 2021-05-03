export function Nav({ children }: { children: JSX.Element | JSX.Element[] }) {
	return (
		<nav className="py-4">
			<ul className="flex space-x-2">{children}</ul>
		</nav>
	);
}

export default Nav;
