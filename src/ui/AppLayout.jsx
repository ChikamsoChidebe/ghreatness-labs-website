import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <NavBar />
      <main className="pt-[4rem]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
