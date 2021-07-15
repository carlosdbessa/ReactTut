import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Button } from '@material-ui/core';

import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(10),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(10),
  },
}));

export default function NativeSelects() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>
    
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Base</InputLabel>
        <Select
          native
          value={state.base}
          onChange={handleChange}
          label="Aroma"
          inputProps={{
            name: 'Nome',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Leite de Cabra</option>
          

        </Select>

        <InputLabel htmlFor="outlined-age-native-simple">Base</InputLabel>

        <Select
          native
          value={state.aroma}
          onChange={handleChange}
          label="Aroma"
          inputProps={{
            name: 'Nome',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={20}>Lavanda e alfazema</option>
          <option value={30}>Mel</option>
       </Select>
        
        
      

        <TextField id="outlined-basic" label="Nome do Bebé" variant="outlined" />

        
        <Button class=" MuiButtonBase-root MuiButton-containedSizeLarge MuiButton-root
        MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-label " variant="contained" color="primary">
              Enviar
        </Button> 
      </FormControl>
      
      

      

    
      

      
    </div>
  );
}

