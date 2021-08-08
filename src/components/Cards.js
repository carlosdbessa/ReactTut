import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Checkout from './Checkout';
import history from './history';


/* function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
} */

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [fragancia, setFragancia] = React.useState('');
  const [base, setBase] = React.useState('');

  const handleChange = (event) => {
    setFragancia(event.target.value);
  };

  const handleChange1 = (event) => {
    setBase(event.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography component="h1" variant="h5">
          Personalizar Sabonete
        </Typography>
        
        <FormControl variant="outlined" className={classes.form}>
        <InputLabel id="demo-simple-select-outlined-label">Fragância</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={fragancia}
          required
          onChange={handleChange}
          label="Fragancia"
        >
          <MenuItem value="">
            <em>-</em>
          </MenuItem>
          <MenuItem value={10}>Lavanda e Alfazema</MenuItem>
          <MenuItem value={20}>Mel</MenuItem>
          <MenuItem value={30}>Bebé</MenuItem>
        </Select>
      </FormControl>
      
      <FormControl variant="outlined" className={classes.form}>
        <InputLabel id="demo-simple-select-outlined-label">Base</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={base}
          required
          onChange={handleChange1}
          label="Base"
        >
          <MenuItem value="">
            <em>-</em>
          </MenuItem>
          <MenuItem value={10}>Leite de Cabra</MenuItem>
        </Select>
      </FormControl>

         {/*    <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" />}
                label="Desejo personalizar o sabonete?"
              />
            </Grid>

            <form className={classes.form} noValidate>
              <TextField
                autoComplete="fname"
                name="Nome do Bebé"
                variant="outlined"
                fullWidth
                id="NomeDoBeBe"
                label="Nome do Bebé"
                autoFocus
              />
              </form> */}
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => history.push('/Checkout')}
            className={classes.submit}
            //Route path="/Encomenda" component={Checkout}
          >
            Personalizar
          </Button>
          <Grid container justifyContent="flex-end">
          </Grid>
      </div>
    </Container>
  );
}