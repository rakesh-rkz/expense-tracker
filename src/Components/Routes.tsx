import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "../Layout/AdminLayout";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import { FourNotFour } from "../Pages/FourNotFour";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                {/* Public Route (Login without Sidebar) */}
                <Route path="/login" element={<Login />} />

                {/* Protected Routes (Inside Admin Layout) */}
                <Route element={<AdminLayout />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/*" element={<FourNotFour />} />
                    FourNotFour
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;
