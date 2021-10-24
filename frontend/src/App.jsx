import { Layout } from 'antd';
import './App.less';
import Login from './components/Login/Login';
import Restaurants from './components/restaurants/Restaurants';
import CartButton from './components/Cart/CartButton';
import logo from './assets/img/logo.png';
import { useState } from 'react';
import SignUp from './components/SignUp/SignUp';

const { Header, Content } = Layout;

function App() {
	const [authed, setAuthed] = useState(false);

	return (
		<Layout className='layout-container' style={{ height: '100vh' }}>
			<Header className='layout__header'>
				<span className='header__logo-container'>
					<img className='header__logo' src={logo} alt='' />
					<h1>
						Order<span>Any</span>where
					</h1>
				</span>

				{authed ? <CartButton /> : <SignUp />}
			</Header>
			<Content
				style={{
					padding: '50px',
					maxHeight: 'calc(100% - 64px)',
					overflowY: 'auto'
				}}
			>
				{authed ? <Restaurants /> : <Login onSuccess={() => setAuthed(true)} />}
			</Content>
		</Layout>
	);
}

export default App;
