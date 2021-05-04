import { NavBar } from "modules";
import Layout from "./Layout";

export function Container({ children }: { children: JSX.Element }) {
  return (
    <Layout>
      <NavBar />
      <div className="my-4">{children}</div>
    </Layout>
  );
}

export default Container;
