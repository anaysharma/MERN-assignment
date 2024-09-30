import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { authContext } from '../contexts/authContext';
import { login } from '../services/auth';

export default function Login() {
  const navigate = useNavigate();

  const { setIsAuthenticated } = useContext(authContext);

  const initialBody = {
    email: undefined,
    password: undefined,
  };

  const [body, setBody] = useState(initialBody);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { success } = await login(body);
    if (success) {
      setIsAuthenticated(true);
      navigate('/');
    }
  };

  return (
    <div className="flex justify-center items-center p-4 h-full bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="grid p-5 rounded-xl border shadow-xl shadow-gray-200 w-full max-w-md bg-white"
      >
        <div className="text-center">
          <span className="text-gray-600 font-bold text-xl">Welcome Back!</span>
        </div>
        <Input
          required={true}
          labelText="Email"
          name="emal"
          placeholder="type email"
          type="email"
          value={body.email}
          onChange={(val) => void setBody((prev) => ({ ...prev, email: val }))}
        />
        <Input
          required={true}
          labelText="Password"
          name="password"
          placeholder="type password"
          type="password"
          value={body.password}
          onChange={(val) =>
            void setBody((prev) => ({ ...prev, password: val }))
          }
        />
        <div className="p-2 gap-2 grid grid-cols-2">
          <Button type="submit" buttonType="primary">
            Login
          </Button>
          <Button
            onClick={() => {
              setBody(initialBody);
            }}
            type="button"
            buttonType="secondary"
          >
            Cancel
          </Button>
        </div>
        <div className="text-center mt-2 pt-2 border-t">
          <span className="text-gray-500">
            not registered yet?{' '}
            <Link
              className="hover:underline hover:text-violet-600"
              to="/signup"
            >
              singup.
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}
