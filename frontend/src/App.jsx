import { useState } from 'react';
import { Layout } from 'antd';
import './App.less';
import LoginForm from './components/LoginForm';

const { Header, Content } = Layout;

function App() {
	const [authed, setAuthed] = useState(false);

	return (
		<Layout style={{ height: '100vh' }}>
			<Header></Header>
			<Content
				style={{
					padding: '50px',
					maxHeight: 'calc(100% - 64px)',
					overflowY: 'auto'
				}}
			>
				{authed ? <div>Logged in</div> : <LoginForm onSuccess={() => setAuthed(true)} />}
			</Content>
		</Layout>
	);
}

export default App;
