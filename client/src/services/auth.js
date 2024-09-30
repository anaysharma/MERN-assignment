import axios from 'axios';
import { server_url as URL } from './config.json';

export const login = async (payload) => {
  try {
    const { data } = await axios.post(URL + 'login', payload);
    const { t } = data;
    localStorage.setItem('token', t);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const singup = async (payload) => {
  try {
    const { data } = await axios.post(URL + 'signup', payload);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getUserDetails = async () => {
  try {
    const token = localStorage.getItem('token');
    const { data } = await axios.get(URL + 'who-am-i', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
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
