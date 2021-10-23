import React from 'react';
import { List, Card } from 'antd';
import AddButton from './AddButton';

const Menulist = ({ menu }) => {
	const grid = { gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 3, xxl: 3 };

	return (
		<List
			className='menu-list-container'
			grid={grid}
			dataSource={menu}
			renderItem={item => (
				<List.Item>
					<Card title={item.name} extra={<AddButton itemId={item.id} />}>
						<img className='menu-list-item__img' src={item.imageUrl} alt='' />
						{`Price: $${item.price}`}
					</Card>
				</List.Item>
			)}
		/>
	);
};

export default Menulist;
