import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';
import client from '../directus/directus';
import { readItems } from '@directus/sdk';

const myTheme = createTheme({
	palette: {
		type: 'light',
		background: {
			default: '#edddd4',
		},
		primary: {
			main: '#6e9075',
		},
		secondary: {
			main: '#226daa',
		},
		divider: '#c84c09',
	},
});

const result = async () => {
	try {
		const data = await client.request(readItems('user_data'));
		console.log(data);
	} catch (error) {
		console.log(error);
	}
};

console.log(result);

function App() {
	result();

	return (
		<ThemeProvider theme={myTheme}>
			<CssBaseline />
			<Header />
			<Nav />
			<About />
			<Projects />
			<Footer />
		</ThemeProvider>
	);
}

export default App;
