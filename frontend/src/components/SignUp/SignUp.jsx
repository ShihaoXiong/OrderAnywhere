import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import SignUpform from './SignUpForm';

const SignUp = () => {
	const [showModal, setShowModal] = useState(false);

	const btnAttr = { type: 'primary', shape: 'round', size: 'large' };
	return (
		<>
			<Button style={{ margin: 'auto 0' }} {...btnAttr} onClick={() => setShowModal(true)}>
				Sign Up
			</Button>

			<Modal title='Sign Up' visible={showModal} onCancel={() => setShowModal(false)} okText='确认' cancelText='取消'>
				<SignUpform closeModal={() => setShowModal(false)} />
			</Modal>
		</>
	);
};

export default SignUp;
