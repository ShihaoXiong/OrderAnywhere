import React, { Component } from 'react';
import RestaurantList from './RestaurantList';
import Menulist from './MenuList';
import { getMenus } from '../../http/apis';

class Restaurants extends Component {
	state = { curRest: null, menuData: [] };

	onSelectRest = id => this.setState({ curRest: id });

	componentDidUpdate = (_, { curRest }) => {
		curRest !== this.state.curRest && getMenus(this.state.curRest).then(res => this.setState({ menuData: res }));
	};

	render() {
		const { curRest, menuData } = this.state;
		return (
			<div>
				<RestaurantList curRest={curRest} onSelectRest={this.onSelectRest} />
				<Menulist menu={menuData} />
			</div>
		);
	}
}

export default Restaurants;
