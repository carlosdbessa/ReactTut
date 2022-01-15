
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import emailjs from "emailjs-com";



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  function sendEmail(e) {
    e.preventDefault();

emailjs.sendForm('service_babysoap', 'template_produtos', e.target, 'user_roqJmDMbHgNTosWgN1PFc')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text); 
    });
    e.target.reset()
}

onButtonClickHandler = () => {
  window.alert('Mensagem Enviada')
  };

  return (
    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5">
          Contacte-nos
        </Typography>
        <form className={classes.form} noValidate onSubmit={sendEmail} id="contactsform">
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="nome"
            label="Nome"
            name="nome"
            autoComplete="nome"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="assunto"
            label="Assunto"
            name="assunto"
            autoComplete="assunto"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="mensagem"
            label="Mensagem"
            name="mensagem"
            autoComplete="mensagem"
            autoFocus
          />
          
         
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            // onClick={alert("Hello World!")}
            className={classes.submit}
            onClick={this.onButtonClickHandler}
          >
            Enviar
          </Button>
          
          {/* <button onClick={alert("Hello World!")}>
               Click Me
            </button>; */}

        </form>
      </div>
      
    </Container>
  );
}