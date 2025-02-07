import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import ContactForm from './ContactForm';

export default function Nav() {
	return (
		<AppBar position='static'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<ContactForm />
					<Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
						<IconButton
							href='https://www.linkedin.com/in/joeydalatri/'
							target='_blank'
						>
							<LinkedInIcon />
						</IconButton>
					</Box>
					<Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
						<IconButton
							href='https://github.com/Ridyl?tab=repositories'
							target='_blank'
						>
							<GitHubIcon />
						</IconButton>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
