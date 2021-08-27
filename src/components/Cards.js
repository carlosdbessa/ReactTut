import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {Hello} from './Hello'
import PricingTables from './pages/PricingTable';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Config from './pages/Config';



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

  const [showPrice, setShowPrice] = useState(false);
  const [showConf, setShowConf] = useState(true);
  

  return (
    <div>
      <>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
     {/*    <Typography component="h1" variant="h5">
          Personalizar Sabonete
        </Typography> */}
        
        {/* <FormControl variant="outlined" className={classes.form}>
        <InputLabel >Fragância</InputLabel>
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
          <MenuItem value={10}> Glicerina à base de Leite de Cabra</MenuItem>
         
        </Select>
      </FormControl> */}

       

     {/*  <Checkbox
      id="showConfig"
      type="checkbox"
      label="Desejo"
      checked={showConf} 
      onChange={() => setShowConf(!showConf)}/> Personalizar
      {showConf && <Config/>} */}
             
          

           
     
<Button  onClick={() => setShowPrice(!showPrice)}>Tabela de Preços</Button>
    {showPrice && <PricingTables/>}

          
      </div>
     </Container>
  </>
  </div>
  );
}