import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from './Sidebar';
import paw from '../assets/loadingpaw.png'

export default function GameScreen(props){

    const classes = useStyles();

    return(
        <div className={classes.main}>
            <div className={classes.topBar}></div>
            <Sidebar name="Game Name" playersList={["Samuel", "Thomas", "David", "Rahul", "Frank"]}/>
            <div className={classes.loadingContainer}>
                <img className={classes.paw} src={paw}/>
                <div className={classes.loadingText}>GAME WILL BEGIN AT 00:00</div>
            </div>
        </div>
    )

}

const useStyles = makeStyles(() => ({
    main: {
        backgroundColor: '#F2F2F2',
        boxShadow: '0px 32.4707px 106.268px -61.9895px rgba(0, 0, 0, 0.25);',
        height: '100vh',
        width: '100vw',
    },
    topBar: {
        height: '6vh',
        backgroundColor: '#B6DAD6'
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        height: '94vh'
    },
    loadingContainer: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    paw: {
        height: "168px"
    },
    loadingText: {
        marginTop: '50px',
        fontFamily: 'ChelseaMarket',
        fontSize: '46px',
        color: '#7A6E5D'
    }
}))