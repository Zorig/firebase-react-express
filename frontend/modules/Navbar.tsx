import { useCallback } from "react";
import { Button, Nav, NavItem } from "components";
import { useAuthUser } from "next-firebase-auth";

export function NavBar() {
  const AuthUser = useAuthUser();

  const handleLogout = useCallback(async () => {
    await AuthUser.signOut();
  }, [AuthUser]);

  return (
    <div className="divide-y divide-gray-100">
      <Nav>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/orders">Orders List</NavItem>
        <li className="mr-auto">
          <Button text="Logout" onClick={handleLogout} />
        </li>
      </Nav>
    </div>
  );
}

export default NavBar;
