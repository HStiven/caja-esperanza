// AppRoutes.tsx
import { HashRouter, Route, Routes } from "react-router-dom"
import { DashboardMain } from "../pages/dashboard"
import { AssistantRoutes } from "./AssistantRoutes"
import { InfoPage } from "../pages/info"

const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<DashboardMain />} />
        <Route element={<AssistantRoutes />}>
          <Route path="info" element={<InfoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default AppRoutes;
