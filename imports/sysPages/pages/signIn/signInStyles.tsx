import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { sysSizing } from '../../../ui/materialui/styles';
import { Button } from '@mui/material';

interface ISignInStyles {
	Container: React.ElementType;
	Content: React.ElementType;
	LoginHeader: React.ElementType;
	LoginLabel: React.ElementType;
	ForgotPasswordButton: React.ElementType;
	FormContainer: React.ElementType;
	FormWrapper: React.ElementType;
}

const SignInStyles: ISignInStyles = {
	Container: styled(Box)(({ theme }) => ({
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '100vh',
		backgroundColor: theme.palette.primary.main,
		backgroundImage: 'url(/images/wireframe/liquid-cheese.svg)',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
	})),

	Content: styled(Box)(({ theme }) => ({
		position: 'relative',
		width: '450px',
		backdropFilter: 'blur(25px)',
		border: '2px solid white',
		borderRadius: sysSizing.radiusMd,
		padding: '7.5em 2.5em 4em 2.5em',
		color: theme.palette.primary.contrastText,
		boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.3)',
	})),

	LoginHeader: styled(Box)(({ theme }) => ({
		position: 'absolute',
		top: '0',
		left: '50%',
		transform: 'translateX(-50%)',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',
		width: '140px',
		height: '70px',
		borderRadius: '0 0 20px 20px',
		'&:before': {
			content: '""',
			position: 'absolute',
			top: '0px',
			left: '-30px',
			width: '30px',
			height: '30px',
			borderTopRightRadius: '50%',
			background: 'transparent',
			boxShadow: `15px 0 0 0 white`,
		},
		'&:after': {
			content: '""',
			position: 'absolute',
			top: '0px',
			right: '-30px',
			width: '30px',
			height: '30px',
			borderTopLeftRadius: '50%',
			background: 'transparent',
			boxShadow: `-15px 0 0 0 white`,
		},
	})),

	LoginLabel: styled(Typography)(({ theme }) => ({
		fontSize: '30px',
		color: 'black',
	})),

	ForgotPasswordButton: styled(Button)(({ theme }) => ({
		alignSelf: 'flex-end',
		textTransform: 'none',
		textDecoration: 'none',
		padding: '0',
		color: theme.palette.primary.contrastText,
		fontSize: '15px',
		borderRadius: sysSizing.radiusSm,
		'&:hover': {
			textDecoration: 'underline',
			color: theme.palette.primary.contrastText,
		},
	})),

	FormContainer: styled(Box)(({ theme }) => ({
		width: '100%',
		gap: '20px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
	})),

	FormWrapper: styled(Box)(({ theme }) => ({
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		gap: theme.spacing(1)
	}))
};

export default SignInStyles;