import { Container, Grid2 } from '@mui/material';

export default function About() {
	return (
		<Grid2>
			<Container sx={{ p: 6, mt: 10, mb: 10 }}>
				<div id='about'>
					Hey there! I&apos;m <span id='about_name'>Joey D&apos;Alatri,</span> a
					passionate developer who loves problem-solving and building impactful
					software. Always learning, always creating. Driven to make a
					difference through technology.
				</div>
			</Container>
		</Grid2>
	);
}
