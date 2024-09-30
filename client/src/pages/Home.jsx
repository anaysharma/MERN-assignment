import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import { authContext } from '../contexts/authContext';
import { getUserDetails, logout } from '../services/auth';

export default function Home() {
  const [details, setDetails] = useState({});

  const navigate = useNavigate();

  const { setIsAuthenticated } = useContext(authContext);

  useEffect(
    () => void getUserDetails().then(({ data }) => setDetails(data)),
    []
  );

  const handleLogout = () => {
    logout();
    navigate('/login');
    setIsAuthenticated(false);
  };

  return (
    <main className="grid place-content-center h-full">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-xl font-bold text-gray-600">
          Welcome {details.username}!
        </h1>
        <Button buttonType="primary" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </main>
  );
}
