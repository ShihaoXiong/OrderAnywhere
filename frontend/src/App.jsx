import { Layout } from 'antd';
import './App.less';
import Login from './components/Login/Login';
import Restaurants from './components/restaurants/Restaurants';
import CartButton from './components/Cart/CartButton';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './assets/img/logo.png';
import { useState } from 'react';
import SignUp from './components/SignUp/SignUp';

const { Header, Content } = Layout;

function App() {
	const [authed, setAuthed] = useState(false);

	return (
		<Layout className='layout-container' style={{ height: '100vh' }}>
			<Header className='layout__header'>
				<img className='header__logo' src={logo} alt='' />
				{/* {authed ? <CartButton /> : <SignUp />} */}
				<CartButton />
			</Header>
			<Content
				style={{
					padding: '50px',
					maxHeight: 'calc(100% - 64px)',
					overflowY: 'auto'
				}}
			>
				<Router>
					<Route exact={true} path='/'>
						<Login onSuccess={() => setAuthed(true)} />
					</Route>

					<Route path='/main'>
						<Restaurants />
					</Route>
				</Router>
			</Content>
		</Layout>
	);
}

export default App;
