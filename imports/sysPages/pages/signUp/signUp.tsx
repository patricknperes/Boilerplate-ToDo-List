// signup component similar to login page (except loginWithPassword)
// instead createUser to insert a new user account document

// login page overrides the form’s submit event and call Meteor’s loginWithPassword()
// Authentication errors modify the component’s state to be displayed
import React from 'react';
import { Link, NavigateFunction } from 'react-router-dom';
import Container from '@mui/material/Container';
import TextField from '/imports/ui/components/SimpleFormFields/TextField/TextField';
import Button from '@mui/material/Button';
import { userprofileApi } from '../../../modules/userprofile/api/userProfileApi';
import SimpleForm from '/imports/ui/components/SimpleForm/SimpleForm';
import { signUpStyle } from './signUpStyle';
import SignInStyles from '../signIn/signInStyles';
import Box from '@mui/material/Box';
import { IUserProfile } from '/imports/modules/userprofile/api/userProfileSch';

import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

interface ISignUp {
	showNotification: (options?: Object) => void;
	navigate: NavigateFunction;
	user: IUserProfile;
}

export const SignUp = (props: ISignUp) => {
	const { showNotification } = props;
	const { Container, Content, FormContainer, FormWrapper, LoginHeader, LoginLabel, ForgotPassword, FormField } = SignInStyles;

	const handleSubmit = (doc: { email: string; password: string }) => {
		const { email, password } = doc;

		userprofileApi.insertNewUser({ email, username: email, password }, (err, r) => {
			if (err) {
				console.log('Login err', err);
				showNotification &&
					showNotification({
						type: 'warning',
						title: 'Problema na criação do usuário!',
						description: 'Erro ao fazer registro em nossa base de dados!'
					});
			} else {
				showNotification &&
					showNotification({
						type: 'sucess',
						title: 'Cadastrado com sucesso!',
						description: 'Registro de usuário realizado em nossa base de dados!'
					});
			}
		});
	};

	return (
		<Container>
			<Content>
				<LoginHeader>
					<LoginLabel>
						Login
					</LoginLabel>
				</LoginHeader>
				<FormContainer>
					<SimpleForm
						schema={{
							email: {
								type: String,
								label: 'Email',
								optional: false
							},
							password: {
								type: String,
								label: 'Senha',
								optional: false
							}
						}}
						onSubmit={handleSubmit}>
						<FormWrapper>
							<FormField>
								<TextField
									variant="outlined"
									id="Email"
									fullWidth
									name="email"
									type="email"
									placeholder="Digite um email"
									InputProps={{
										endAdornment: <EmailIcon sx={{ color: 'white' }} />
									}}
								/>
								<TextField
									variant="outlined"
									id="Senha"
									fullWidth
									name="password"
									placeholder="Digite uma senha"
									type="password"
									InputProps={{
										endAdornment: <LockIcon sx={{ color: 'white' }} />
									}}
								/>
							</FormField>
							<Button
								color={'primary'}
								variant={'outlined'}
								id="submit"
								sx={{
									width: '100%',
									height: '50px',
									backgroundColor: 'white',
									color: 'black',
									fontSize: '16px',
									fontWeight: '600',
									border: 'none',
									borderRadius: '30px',
									cursor: 'pointer',
									transition: '0.3s',
									'&:hover': {
										backgroundColor: '#f0f0f0',
										border: 'none',
										color: 'black',
									},
								}}
							>
								Cadastrar
							</Button>

						</FormWrapper>

					</SimpleForm>
					<ForgotPassword>
						Já tem uma conta? {' '}
						<Link
							to="/signin"
							style={{
								textDecoration: 'none',
								color: '#fff',
								fontWeight: 700
							}}
							onMouseOver={e => (e.currentTarget.style.textDecoration = 'underline')}
							onMouseOut={e => (e.currentTarget.style.textDecoration = 'none')}
						>
							Faça login
						</Link>
					</ForgotPassword>
				</FormContainer>
			</Content>
		</Container>
	);
};
