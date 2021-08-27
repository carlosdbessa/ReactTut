import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';



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
  

function Config() {

    const [fragancia, setFragancia] = React.useState('');
    const [showAromas, setShowAromas] = useState(true);
    const classes = useStyles();

    const handleChange = (event) => {
        setFragancia(event.target.value);
      };

    return (
        <div>
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
              <Checkbox
              id="showAromas"
              type="checkbox"
              label="Desejo"
              checked={showAromas}
              onChange={() => setShowAromas(!showAromas)}
              /> Deseja Aroma Extra?
              {showAromas && <div>
                  
                <FormControl variant="outlined" className={classes.form}>
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
                  
                  
                  
                  </div>}
            
              </form> 

              
              <Button
          className={classes.submit}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >Personalizar</Button>  

            
        </div>
    )
}

export default Config


