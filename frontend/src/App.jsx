import { Layout } from 'antd';
import './App.less';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './assets/img/logo.png';

const { Header, Content } = Layout;

function App() {
	return (
		<Layout className='layout-container' style={{ height: '100vh' }}>
			<Header>
				<img className='header__logo' src={logo} alt='' />
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
						<Login />
					</Route>

					<Route path='/main'>
						<div>Logged in</div>
					</Route>
				</Router>
			</Content>
		</Layout>
	);
}

export default App;
