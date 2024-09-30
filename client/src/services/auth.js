import axios from 'axios';

export const login = async (payload) => {
  try {
    const { data } = await axios.post(
      import.meta.env.VITE_BACKEND_URL + 'login',
      payload
    );
    const { t } = data;
    localStorage.setItem('token', t);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const singup = async (payload) => {
  try {
    const { data } = await axios.post(
      import.meta.env.VITE_BACKEND_URL + 'signup',
      payload
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getUserDetails = async () => {
  try {
    const token = localStorage.getItem('token');
    const { data } = await axios.get(
      import.meta.env.VITE_BACKEND_URL + 'who-am-i',
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      }
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const logout = () => {
  try {
    localStorage.clear();
  } catch (err) {
    console.log(err);
  }
};
