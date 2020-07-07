import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  buttonsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    padding: '12px 30px',
  },
}));

function App() {
  // Call the "styles" variable we created above. Material-UI will then create these styles for us to use.
  const classes = styles();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Noroff
          </Typography>
        </Toolbar>
      </AppBar>

      <div className={classes.buttonsWrapper}>
        <Button variant="contained" color="primary">
          Default theme primary color
        </Button>
        <Button variant="contained" color="secondary">
          Default theme secondary color
        </Button>
        <Button className={classes.button}>
          Styled with hooks
        </Button>
      </div>
    </>
  );
}

export default App;
