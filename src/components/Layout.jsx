import { Outlet } from "react-router-dom";

import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <footer>Lashes Nataliia</footer> */}
    </>
  );
};

export default Layout;
