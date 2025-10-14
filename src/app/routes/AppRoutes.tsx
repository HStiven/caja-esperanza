import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardMain } from "../pages/dashboard";
import { AssistantRoutes } from "./AssistantRoutes";

const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AssistantRoutes />}>
                    <Route path="/" element={<DashboardMain />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;