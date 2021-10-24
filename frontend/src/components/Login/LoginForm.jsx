import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { login } from '../../http/apis';
// import { withRouter } from 'react-router-dom';

class Loginform extends Component {
	state = { loading: false };

	onFinish = values => {
		this.setState({ loading: true });
		login(values)
			.then(() => {
				this.props.onSuccess();
				// this.props.history.push('/main');
			})
			.finally(() => this.setState({ loading: false }));
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
				<Form.Item name='username' rules={[{ required: true, message: 'Please input your Username!' }]}>
					<Input prefix={<UserOutlined />} placeholder='Username' />
				</Form.Item>

				<Form.Item name='password' rules={[{ required: true, message: 'Please input your Password!' }]}>
					<Input.Password prefix={<LockOutlined />} type='password' placeholder='Password' />
				</Form.Item>

				<Form.Item>
					<Button style={{ width: '100%' }} type='primary' htmlType='submit' loading={this.state.loading}>
						Log in
					</Button>
				</Form.Item>
			</Form>
		);
	}
}

// export default withRouter(Loginform);
export default Loginform;
