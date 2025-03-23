import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
import { Header } from "../Components/Header";

const AdminLayout = () => {
    return (
        <div style={{ display: "flex" }}>
            {/* Sidebar remains constant */}
            <Navbar />
            <div style={{ flex: 1, padding: "20px" }}>
                {/* Header remains constant */}
                <Header />
                {/* Dynamic Content */}
                <Outlet />
            </div>
        </div>
    );
};

export default AdminLayout;
