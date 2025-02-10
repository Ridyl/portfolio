import {
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Grid2,
	Button,
	Typography,
} from '@mui/material';
import PropType from 'prop-types';
import { motion } from 'motion/react';

const links = [
	'https://weather-app-delta-livid-35.vercel.app',
	'https://to-do-app-zeta-sage.vercel.app',
	'https://react-change-calculator-teal.vercel.app/',
];
const repos = [
	'https://github.com/Ridyl/weather-app',
	'https://github.com/Ridyl/To-Do-App',
	'https://github.com/Ridyl/react-change-calculator',
];

const images = [
	'src/img/card_img/weather_app.png',
	'src/img/card_img/todo_ui.png',
	'src/img/card_img/change_calculator.png',
];

export default function Projects() {
	const ProjectCards = ({ title, desc, index }) => {
		return (
			<motion.div whileHover={{ scale: 1.1 }} style={{ maxHeight: 150 }}>
				<Card sx={{ maxWidth: 400 }}>
					<CardMedia
						sx={{ height: 170 }}
						image={images[index]}
						title='weather app ui'
					/>
					<CardContent>
						<Typography gutterBottom variant='h5' component='div'>
							{title}
						</Typography>
						<Typography variant='body2' sx={{ color: 'text.secondary' }}>
							{desc}
						</Typography>
					</CardContent>
					<CardActions>
						<Button size='small' href={links[index]} target='_blank'>
							Check it Out!
						</Button>
						<Button size='small' href={repos[index]} target='_blank'>
							Repository
						</Button>
					</CardActions>
				</Card>
			</motion.div>
		);
	};

	return (
		<Grid2
			container
			spacing={3}
			justifyContent='center'
			sx={{
				pt: 10,
				pb: 10,
				backgroundColor: '#226daa',
				boxShadow: '0px 7px #052b4a',
				height: '500px',
			}}
		>
			<ProjectCards
				title='Weather App'
				desc='A weather app created using React and Bootstrap. Loads weather for
						area based off of lat long values of the user and shows a map object
						using LeafletJS. Uses Google Charts API for the temperature guage.'
				index={0}
			/>
			<ProjectCards
				title='To-Do App'
				desc='To-Do App created with React and Bootstrap. Allows for creation of
						items, deletion, and marking completion. Has very basic title and
						paragraph formatting that is done in JS rather than an API.'
				index={1}
			/>
			<ProjectCards
				title='Change Calculator'
				desc='Change calculator calculates change to be given back to a customer
						and has a visual representation of the amount of currency that needs
						to be returned. Built using React and Bootstrap.'
				index={2}
			/>
		</Grid2>
	);
}

Projects.propTypes = {
	title: PropType.string,
	desc: PropType.string,
	index: PropType.number,
};
