import React, { useState, useEffect } from 'react';
import { Button, Drawer, List, Avatar } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import DrawFooter from './DrawFooter';
import { getCart } from '../../http/apis';

const CartButton = () => {
	const [cartVisible, setCartVisible] = useState(false);
	const [loading, setLoading] = useState(false);
	const [cartData, setCartData] = useState();

	const onClose = () => setCartVisible(false);
	const clearCart = () => {
		setCartData();
		setCartVisible(false);
	};

	useEffect(() => {
		if (!cartVisible) return;

		setLoading(true);
		getCart()
			.then(res => setCartData(res))
			.finally(() => setLoading(false));
	}, [cartVisible]);

	const btnAttr = { type: 'primary', shape: 'round', size: 'large', icon: <ShoppingCartOutlined /> };
	return (
		<>
			<Button style={{ margin: 'auto 0' }} {...btnAttr} onClick={() => setCartVisible(true)}>
				Cart
			</Button>
			<Drawer
				width={'50vw'}
				title='My Shopping Cart'
				visible={cartVisible}
				onClose={onClose}
				footer={
					<DrawFooter
						price={cartData?.totalPrice ?? 0}
						cancel={onClose}
						disableCheckout={cartData?.orderItemList?.length ? false : true}
						clearCart={() => clearCart()}
					/>
				}
			>
				<List
					loading={loading}
					dataSource={cartData?.orderItemList ?? []}
					renderItem={item => (
						<List.Item>
							<List.Item.Meta
								avatar={<Avatar src={item.menuItem.imageUrl} />}
								title={item.menuItem.name}
								description={item.menuItem.description}
							/>
						</List.Item>
					)}
				/>
			</Drawer>
		</>
	);
};

export default CartButton;
