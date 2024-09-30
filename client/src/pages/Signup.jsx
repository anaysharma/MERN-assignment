import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { singup } from '../services/auth';

export default function Signup() {
  const navigate = useNavigate();

  const initialBody = {
    username: undefined,
    email: undefined,
    password: undefined,
  };

  const [body, setBody] = useState(initialBody);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await singup(body);
    navigate('/login');
  };

  return (
    <div className="flex justify-center items-center p-4 h-full bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="grid p-5 rounded-xl border shadow-xl shadow-gray-200 w-full max-w-md bg-white"
      >
        <div className="text-center">
          <span className="text-gray-600 font-bold text-xl">Register</span>
        </div>
        <Input
          labelText="Username"
          name="username"
          placeholder="type username"
          required={true}
          type="text"
          value={body.username}
          onChange={(val) =>
            void setBody((prev) => ({ ...prev, username: val }))
          }
        />
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
            Signup
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
            Already registered?{' '}
            <Link className="hover:underline hover:text-violet-600" to="/login">
              login.
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}
