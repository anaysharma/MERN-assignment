import { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { authContext } from '../../contexts/authContext';

export default function Layout() {
  const { isAuthenticated } = useContext(authContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return <Outlet />;
}
