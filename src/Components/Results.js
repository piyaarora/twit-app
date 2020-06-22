import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Button, Paper, Grid, InputBase } from '@material-ui/core';
import twitter from '../images/twitter.png'

import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import Cards from './Card';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        // marginRight: theme.spacing(1),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.25),
        },
        marginRight: theme.spacing(1),
        marginLeft: 0,
        width: '90px',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
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
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    paper: {
        height: 20,
        width: 50,
        fontSize: '20px',
        background: 'transparent',
        textAlign: 'center',
        alignItems: 'center',
        padding: '0 auto',
        color: '#000',
        border: 'none',
        boxShadow: 'none',
        margin: '0px',

    },
    bgcolor: {
        background: '#fff'
    },
    button: {

        // marginTop: '30px',
        // marginLeft: '230px',
        background: '#00acee'
    }, paper1: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    margins: {
        marginTop: '30px'
    }
}));

function Results() {
    const classes = useStyles();

    return (
        <div className={classes.grow}>
            <AppBar position="static" className={classes.bgcolor}>
                <Toolbar>
                    <Grid xs={3} container>

                        <Paper className={classes.paper}>Tweet</Paper>
                        <Paper className={classes.paper}>
                            <img src={twitter} height='30px' width='30px' alt='' />
                        </Paper>
                        <Paper className={classes.paper}>Search</Paper>
                    </Grid>
                    <Grid xs={6}>
                        <div className={classes.search} >
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
                        {/* <div className={classes.grow} /> */}

                    </Grid>
                    <Grid xs={3}>
                        <Button variant="contained" color="primary" className={classes.button}>
                            Search
                        </Button>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Grid container spacing={3} className={classes.margins}>
                <Grid item xs={4}>
                    <Cards />

                </Grid>
                <Grid item xs={4}>
                    <Cards />

                </Grid>
                <Grid item xs={4}>
                    <Cards />

                </Grid>
                <Grid item xs={4}>
                    <Cards />

                </Grid>
                <Grid item xs={4}>
                    <Cards />

                </Grid>
                <Grid item xs={4}>
                    <Cards />

                </Grid>
            </Grid>
        </div >
    );
}
export default Results