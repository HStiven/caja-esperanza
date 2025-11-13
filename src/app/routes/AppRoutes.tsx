// AppRoutes.tsx
import { HashRouter, Route, Routes } from "react-router-dom"
import { DashboardMain } from "../pages/dashboard"
import { AssistantRoutes } from "./AssistantRoutes"
import { InfoPage } from "../pages/info"
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute"
import AdminSettings from "../pages/admin"

const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<DashboardMain />} />
        <Route element={<AssistantRoutes />}>
          <Route path="info" element={<InfoPage />} />
        </Route>
        
        <Route path="/admin" element={
          <ProtectedRoute>
            <AdminSettings />
          </ProtectedRoute>
        } />

      </Routes>
    </HashRouter>
  )
}

export default AppRoutes;
