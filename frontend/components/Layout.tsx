import { ReactChild } from "react";

export function Layout({ children }: { children: ReactChild }) {
  return <div className="container mx-auto">{children}</div>;
}

export default Layout;
