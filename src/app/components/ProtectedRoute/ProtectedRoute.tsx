import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/Autentication/useAutenticacion';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Cargando...</div>;
  }

  return user ? <>{children}</> : <Navigate to="/" replace />;
};

export default ProtectedRoute;