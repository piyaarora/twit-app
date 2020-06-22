import React from 'react'
import { Container, Button, Paper, Grid, InputBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import twitter from '../images/twitter.png'

const Home = () => {
  const useStyles = makeStyles((theme) => ({

    root: {
      flexGrow: 1,
      marginTop: '200px'
    },

    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      border: '1px solid #000',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
        marginTop: '20px'
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#000'
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
    paper: {
      height: 30,
      width: 80,
      fontSize: '30px',
      background: 'transparent',
      textAlign: 'center',
      alignItems: 'center',
      padding: '0 auto',
      margin: '10 0',
      color: '#000',
      border: 'none',
      boxShadow: 'none'

    },
    control: {
      padding: theme.spacing(2),
    },
    button: {

      marginTop: '30px',
      marginLeft: '230px',
      background: '#00acee'
    }
  }));
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Grid item xs={12} className={classes.root}>
        <Grid container justify="center">

          <Paper className={classes.paper}>Tweet</Paper>
          <Paper className={classes.paper}>
            <img src={twitter} height='40px' width='40px' alt='' />
          </Paper>
          <Paper className={classes.paper}>Search</Paper>
        </Grid>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        <Button variant="contained" color="primary" className={classes.button}>
          Search
      </Button>
      </Grid>

    </Container>
  )
}

export default Home

