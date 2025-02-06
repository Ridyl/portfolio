import { Grid2 } from '@mui/material';
import { motion } from 'motion/react';
import background from '../img/header_background.jpg';
import name from '../img/header_name.svg';
import me from '../img/me2.png';

export default function Header() {
	return (
		<Grid2
			size={12}
			id='header'
			style={{
				backgroundImage: `url(${background})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				height: '40rem',
			}}
		>
			<Grid2 display='flex' flexDirection='column' justifyContent='center'>
				<motion.img
					src={name}
					alt="Joey D'Alatri"
					initial={{ x: -500 }}
					animate={{ x: 0 }}
					transition={{ duration: 1.5, ease: 'easeOut' }}
				/>

				<motion.img
					src={me}
					alt='A picture of me!'
					style={{
						width: '393px',
						height: '525px',
						filter: 'grayscale(.3)',
						position: 'absolute',
						top: '115px',
						alignSelf: 'center',
					}}
					initial={{ x: 500, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 2, ease: 'easeOut' }}
				/>
			</Grid2>
		</Grid2>
	);
}
