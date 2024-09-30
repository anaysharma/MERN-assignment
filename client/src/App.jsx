import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './components/global/Layout';
import AuthContextProvider from './contexts/AuthContextProvider';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* more protected routes */}
          </Route>
          <Route path="*" element={<Login />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
