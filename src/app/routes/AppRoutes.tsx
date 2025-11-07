import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardMain } from "../pages/dashboard";
import { AssistantRoutes } from "./AssistantRoutes";

const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashboardMain />}/>
                <Route element={<AssistantRoutes />}>
                    <Route path="/info" element={<></>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;