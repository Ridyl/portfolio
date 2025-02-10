import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

export default function Footer() {
	return (
		<AppBar position='static'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters sx={{ justifyContent: 'center' }}>
					Let&apos;s create together!
				</Toolbar>
			</Container>
		</AppBar>
	);
}
