import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Snackbar from '@mui/material/Snackbar';

import { DialogTitle, Grid2 } from '@mui/material';

export default function ContactForm() {
	const [open, setOpen] = useState(false);
	const [pop, setPop] = useState(false);
	const [user, setUser] = useState(null);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const handlePopOpen = () => setPop(true);
	const handlePopClose = () => setPop(false);

	useEffect(() => {
		if (user) {
			handlePopOpen();
		}
	}, [user]);

	const validation = yup.object({
		firstName: yup.string().required('First name is required'),
		lastName: yup.string(),
		email: yup
			.string()
			.email('Enter a valid email')
			.required('Email is required'),
	});

	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
		},
		validationSchema: validation,
		onSubmit: (values) => {
			setUser(values);
			handleClose();
		},
	});

	const toast = (
		<>
			<IconButton
				size='small'
				aria-label='close'
				color='inherit'
				onClick={handlePopClose}
			>
				<CloseIcon fontSize='small' />
			</IconButton>
		</>
	);

	const PopUp = () => {
		if (user) {
			return (
				<Snackbar
					open={pop}
					autoHideDuration={10000}
					onClose={handlePopClose}
					message={`Thank you ${user.firstName}, I will reach out to you soon!`}
					action={toast}
				/>
			);
		}
	};

	return (
		<>
			<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
				<Button
					sx={{
						my: 2,
						backgroundColor: '#edddd4',
						color: '#6e9075',
						display: 'block',
						mr: 2,
					}}
					variant='contained'
					onClick={handleOpen}
				>
					Contact Me!
				</Button>
			</Box>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Send Me Your Information</DialogTitle>
				<DialogContent>
					<form onSubmit={formik.handleSubmit} id='form'>
						<Grid2 container spacing={3}>
							<Grid2 container spacing={3}>
								<TextField
									id='firstName'
									name='firstName'
									label='First Name*'
									value={formik.values.firstName}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									error={
										formik.touched.firstName && Boolean(formik.errors.firstName)
									}
									helperText={
										formik.touched.firstName && formik.errors.firstName
									}
								/>
								<TextField
									id='lastName'
									name='lastName'
									label='Last Name'
									value={formik.values.lastName}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									error={
										formik.touched.lastName && Boolean(formik.errors.lastName)
									}
									helperText={formik.touched.lastName && formik.errors.lastName}
								/>
							</Grid2>
							<TextField
								fullWidth
								id='email'
								name='email'
								label='Email*'
								value={formik.values.email}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								error={formik.touched.email && Boolean(formik.errors.email)}
								helperText={formik.touched.email && formik.errors.email}
							/>
							<Grid2 container spacing={2} offset={{ md: 'auto' }}>
								<Button
									color='primary'
									variant='outlined'
									onClick={handleClose}
								>
									Cancel
								</Button>
								<Button color='secondary' variant='contained' type='submit'>
									Submit
								</Button>
							</Grid2>
						</Grid2>
					</form>
				</DialogContent>
			</Dialog>
			<PopUp />
		</>
	);
}
