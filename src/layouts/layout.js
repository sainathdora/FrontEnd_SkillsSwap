import { Outlet } from "react-router-dom";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
export default function Layout() {
    return <>

        <NavBar />
        <Outlet />
        <Footer />

    </>
}