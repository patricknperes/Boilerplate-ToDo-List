import React, { useContext, useEffect } from 'react';
import SignInStyles from './signInStyles';
import { useNavigate } from 'react-router-dom';
import SysTextField from '../../../ui/components/sysFormFields/sysTextField/sysTextField';
import SysForm from '../../../ui/components/sysForm/sysForm';
import SysFormButton from '../../../ui/components/sysFormFields/sysFormButton/sysFormButton';
import { signInSchema } from './signinsch';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SysIcon from '../../../ui/components/sysIcon/sysIcon';
import AuthContext, { IAuthContext } from '/imports/app/authProvider/authContext';
import AppLayoutContext from '/imports/app/appLayoutProvider/appLayoutContext';

import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import LoginIcon from '@mui/icons-material/Login';

const SignInPage: React.FC = () => {
	const { showNotification } = useContext(AppLayoutContext);
	const { user, signIn } = useContext<IAuthContext>(AuthContext);
	const navigate = useNavigate();
	const { Container, Content, FormContainer, FormWrapper, LoginHeader, LoginLabel, ForgotPassword, FormField } = SignInStyles;

	const handleSubmit = ({ email, password }: { email: string; password: string }) => {
		signIn(email, password, (err) => {
			if (!err) navigate('/');
			showNotification({
				type: 'error',
				title: 'Erro ao tentar logar',
				message: 'Email ou senha inválidos',
			});
		});
		;
	};

	const handleForgotPassword = () => navigate('/password-recovery');
	const handleSignUp = () => navigate('/signup');

	useEffect(() => {
		if (user) navigate('/');
	}, [user]);

	return (
		<Container>
			<Content>
				<LoginHeader>
					<LoginLabel>
						Login
					</LoginLabel>
				</LoginHeader>
				<FormContainer>
					<SysForm schema={signInSchema} onSubmit={handleSubmit} debugAlerts={false}>
						<FormWrapper>
							<FormField>
								<SysTextField
									variant="outlined"
									name="email"
									label="Email"
									fullWidth
									autoComplete='off'
									placeholder="Digite seu email"
									endAdornment={
										<EmailIcon />
									}
								/>
								<SysTextField
									variant="outlined"
									label="Senha"
									fullWidth
									autoComplete='off'
									name="password"
									placeholder="Digite sua senha"
									type="password"
									endAdornment={
										<LockIcon />
									}
								/>
							</FormField>
							<ForgotPassword variant="link" sx={{ alignSelf: 'flex-end', cursor: 'pointer', '&:hover': { textDecoration: 'underline', }, }} onClick={handleForgotPassword}>Esqueceu sua senha?</ForgotPassword>
							<SysFormButton
								variant="contained"
								color="primary"
								endIcon={<LoginIcon />}>
								Entrar
							</SysFormButton>
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'center',
									justifyContent: 'center',
									gap: 0.5,
								}}
							>
								<ForgotPassword variant="link" sx={{ cursor: 'default' }}> Não tem cadastro? </ForgotPassword>
								<ForgotPassword
									onClick={handleSignUp}
									sx={{
										fontWeight: '700',
										'&:hover': {
											textDecoration: 'underline',
										},
									}}
								>
									Comece agora
								</ForgotPassword>
							</Box>
						</FormWrapper>
					</SysForm>
				</FormContainer>
			</Content>
		</Container>
	);
};

export default SignInPage;
