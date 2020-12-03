import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from './Sidebar';

export default function GameScreen(props){

    const classes = useStyles();

    return(
        <div className={classes.container}>
            <div className={classes.topBar}></div>
            <Sidebar name="Game Name"></Sidebar>
        </div>
    )

}

const useStyles = makeStyles(() => ({
    container: {
        backgroundColor: '#F2F2F2',
        boxShadow: '0px 32.4707px 106.268px -61.9895px rgba(0, 0, 0, 0.25);'
    },
    topBar: {
        height: '50px',
        backgroundColor: '#B6DAD6'
    }
}))