import { message } from 'antd';
import http from './http';

export const login = credential => {
	const { username, password } = credential;
	const url = `/login?username=${username}&password=${password}`;
	return http.post(url).then(() => message.success('Login successfully!'));
};

export const getRestaurants = () => http.get('/restaurants');

export const getCart = () => http.get('/cart');

export const checkout = () => http.get('/checkout');

export const addItemToCart = itemId => http.post(`/order/${itemId}`);

export const getMenus = restId => http.get(`/restaurant/${restId}/menu`);

export const signup = data => http.post('/signup', data);
