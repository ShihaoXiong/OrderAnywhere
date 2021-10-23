import React, { useState, useEffect } from 'react';
import './restaurants.less';
import { Select } from 'antd';
import { getRestaurants } from '../../http/apis';
const { Option } = Select;

const RestaurantList = props => {
	const [restaurants, setRestaurants] = useState([]);
	const [loading, setLoading] = useState(false);
	const placeholder = 'Select a restaurant';

	useEffect(() => {
		setLoading(true);
		getRestaurants()
			.then(res => setRestaurants(res))
			.finally(_ => setLoading(false));
	}, []);

	return (
		<Select
			className='select__foodlist'
			value={props.curRest}
			loading={loading}
			placeholder={placeholder}
			size='large'
			onSelect={value => props.onSelectRest(value)}
		>
			{restaurants.map(item => (
				<Option value={item.id} key={item.id}>
					{item.name}
				</Option>
			))}
		</Select>
	);
};

export default RestaurantList;
