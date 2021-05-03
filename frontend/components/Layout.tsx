type LayoutType = {
	children: JSX.Element | JSX.Element[];
};

export function Layout({ children }: LayoutType) {
	return <div className="container mx-auto">{children}</div>;
}

export default Layout;
