import axios from 'axios';

const client = axios.create({
    baseURL:import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000',
})
 client.defaults.withCredentials = true

 export const authenticate = async(payload) => {
    return await client.post('/authenticate',payload)
 }

 export const createUser = async(payload) => {
    return await client.post('/create-user',payload)
 }

 export const login = async(payload) => {
    return await client.post('/login',payload)
 }

 export const register = async (payload) => {
    return await client.post('/register', payload)
  }

 export const logout = async() => {
    return await client.post('/logout')
 }

 export const me = async () => {
   const { data } = await client.get('/me');
   return data;
};
