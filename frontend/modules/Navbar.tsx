import { useCallback } from "react";
import { Button, Nav, NavItem } from "components";
import { useAuthUser } from "next-firebase-auth";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Order List", href: "/orders" },
];

export function NavBar() {
  const AuthUser = useAuthUser();

  const handleLogout = useCallback(async () => {
    await AuthUser.signOut();
  }, [AuthUser]);

  return (
    <div className="divide-y divide-gray-100 px-3">
      <div className="flex items-center justify-between">
        <Nav>
          {navigation.map((item) => (
            <NavItem key={item.name} href={item.href}>
              {item.name}
            </NavItem>
          ))}
        </Nav>
        <Button text="Log out" onClick={handleLogout} />
      </div>
    </div>
  );
}

export default NavBar;
