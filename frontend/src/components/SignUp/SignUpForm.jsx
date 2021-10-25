import React, { Component } from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { signup } from '../../http/apis';

class SignUpform extends Component {
	state = { loading: false };

	onFinish = values => {
		this.setState({ loading: true });
		signup(values)
			.then(() => message.success('Sign up successfully!'))
			.finally(() => {
				this.setState({ loading: false });

				this.props.closeModal();
			});
	};

	render() {
		return (
			<Form
				name='normal_login'
				className='login__form'
				initialValues={{ remember: true }}
				onFinish={this.onFinish}
				size='large'
			>
				<Form.Item name='email' rules={[{ required: true, message: 'Please input your Username!' }]}>
					<Input prefix={<UserOutlined />} placeholder='Username' />
				</Form.Item>

				<Form.Item name='password' rules={[{ required: true, message: 'Please input your Password!' }]}>
					<Input.Password prefix={<LockOutlined />} type='password' placeholder='Password' />
				</Form.Item>

				<Form.Item name='firstname' rules={[{ required: true, message: 'Please input your first name!' }]}>
					<Input placeholder='Firstname' />
				</Form.Item>

				<Form.Item name='lastname' rules={[{ required: true, message: 'Please input your last name!' }]}>
					<Input placeholder='Lastname' />
				</Form.Item>

				<Form.Item>
					<Button style={{ width: '100%' }} type='primary' htmlType='submit' loading={this.state.loading}>
						Sign Up
					</Button>
				</Form.Item>
			</Form>
		);
	}
}

export default SignUpform;
