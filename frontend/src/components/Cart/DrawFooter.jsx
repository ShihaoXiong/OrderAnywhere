import React, { useState } from 'react';
import { Typography, Button, message } from 'antd';
import { checkout } from '../../http/apis';
const { Text } = Typography;

const DrawFooter = ({ price, cancel, clearCart, disableCheckout }) => {
	const [loading, setLoading] = useState(false);

	const onCheckOut = () => {
		setLoading(true);
		checkout()
			.then(res => {
				message.success('Successfully checkout!');
				clearCart();
			})
			.finally(() => setLoading(false));
	};

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between'
			}}
		>
			<Text strong={true}>{`Total Price: $${price.toFixed(2)}`}</Text>
			<div>
				<Button onClick={cancel}>Cancel</Button>
				<Button type='primary' onClick={onCheckOut} loading={loading} disabled={disableCheckout || loading}>
					Checkout
				</Button>
			</div>
		</div>
	);
};

export default DrawFooter;
