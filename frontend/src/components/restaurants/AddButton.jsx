import React, { useState } from 'react';
import { Tooltip, Button, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { addItemToCart } from '../../http/apis';

const Addbutton = ({ itemId }) => {
	const [loading, setLoading] = useState(false);

	const addToCart = () => {
		setLoading(true);
		addItemToCart(itemId)
			.then(() => message.success('success'))
			.finally(() => setLoading(false));
	};

	return (
		<Tooltip title='Add to shopping cart'>
			<Button loading={loading} type='primary' icon={<PlusOutlined />} onClick={addToCart}></Button>
		</Tooltip>
	);
};

export default Addbutton;
