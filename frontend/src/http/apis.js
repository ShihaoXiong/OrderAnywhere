import { message } from 'antd';
import http from './http';

export const login = credential => {
	const { username, password } = credential;
	const url = `/login?username=${username}&password=${password}`;
	return http.post(url).then(() => message.success('Login successfully!'));
};
