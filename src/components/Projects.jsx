import {
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Grid2,
	Button,
	Typography,
} from '@mui/material';

export default function Projects() {
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
			}}
		>
			<Card sx={{ maxWidth: 400 }}>
				<CardMedia
					sx={{ height: 160 }}
					image='src/img/card_img/weather_app.png'
					title='weather app ui'
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						Weather App
					</Typography>
					<Typography variant='body2' sx={{ color: 'text.secondary' }}>
						Lizards are a widespread group of squamate reptiles, with over 6,000
						species, ranging across all continents except Antarctica
					</Typography>
				</CardContent>
				<CardActions>
					<Button
						size='small'
						href='https://weather-app-delta-livid-35.vercel.app'
						target='_blank'
					>
						Check it Out!
					</Button>
					<Button
						size='small'
						href='https://github.com/Ridyl/weather-app'
						target='_blank'
					>
						Repository
					</Button>
				</CardActions>
			</Card>

			<Card sx={{ maxWidth: 400 }}>
				<CardMedia
					sx={{ height: 160 }}
					image='src/img/card_img/todo_ui.png'
					title='green iguana'
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						To-Do App
					</Typography>
					<Typography variant='body2' sx={{ color: 'text.secondary' }}>
						Lizards are a widespread group of squamate reptiles, with over 6,000
						species, ranging across all continents except Antarctica
					</Typography>
				</CardContent>
				<CardActions>
					<Button
						size='small'
						href='https://to-do-app-zeta-sage.vercel.app'
						target='_blank'
					>
						Check it Out!
					</Button>
					<Button
						size='small'
						href='https://github.com/Ridyl/To-Do-App'
						target='_blank'
					>
						Repository
					</Button>
				</CardActions>
			</Card>

			<Card sx={{ maxWidth: 400 }}>
				<CardMedia
					sx={{ height: 160 }}
					image='src/img/card_img/change_calculator.png'
					title='change calculator ui'
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						Change Calculator
					</Typography>
					<Typography variant='body2' sx={{ color: 'text.secondary' }}>
						Lizards are a widespread group of squamate reptiles, with over 6,000
						species, ranging across all continents except Antarctica
					</Typography>
				</CardContent>
				<CardActions>
					<Button
						size='small'
						href='https://react-change-calculator-teal.vercel.app/'
						target='_blank'
					>
						Check it Out!
					</Button>
					<Button
						size='small'
						href='https://github.com/Ridyl/react-change-calculator'
						target='_blank'
					>
						Repository
					</Button>
				</CardActions>
			</Card>
		</Grid2>
	);
}
