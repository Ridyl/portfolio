import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import './App.css';

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

function App() {
	return (
		<ThemeProvider theme={myTheme}>
			<CssBaseline />
			<Header />
			<Nav />
			<About />
			<Projects />
		</ThemeProvider>
	);
}

export default App;
