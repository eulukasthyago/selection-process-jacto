import { useTheme } from 'styled-components';

const ContactForm = () =>{

	const theme = useTheme();

	return(
		<form method="post" action="" style={{ display: 'flex', flexDirection: 'column' }}>
			<input type="text" name="nome" placeholder="Nome" style={{ padding: 10, marginBottom: 20, borderRadius: 50, borderWidth: 1, borderStyle: 'solid', borderColor: theme.colors.backgroundLight}} />
			<input type="email" name="email" placeholder="E-mail" style={{ padding: 10, marginBottom: 20, borderRadius: 50, borderWidth: 1, borderStyle: 'solid', borderColor: theme.colors.backgroundLight}} />
			<button type="submit" style={{ padding: 10, backgroundColor: theme.colors.primary, border: 'none', borderRadius: 50}}>Enviar</button>
		</form>
	)
}

export default ContactForm;