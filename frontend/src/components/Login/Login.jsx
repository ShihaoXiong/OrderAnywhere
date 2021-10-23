import React, { Component } from 'react';
import LoginForm from './LoginForm';
import img from '../../assets/img/login_img.png';
import './login.less';

class Login extends Component {
	render() {
		return (
			<div className='login__page'>
				<span className='login__img-container'>
					<img src={img} alt='' />
				</span>
				<span className='login__form-container'>
					<h1>
						Order<span>Any</span>where
					</h1>
					<LoginForm onSuccess={this.props.onSuccess} />
				</span>
			</div>
		);
	}
}

export default Login;
