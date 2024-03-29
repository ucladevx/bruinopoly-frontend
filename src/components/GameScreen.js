import React from 'react';
import { useSelector } from 'react-redux'
import Board from '../containers/Board';
import {Redirect} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from './Sidebar';
import Chat from './Chat';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import decode from 'jwt-decode'

import paw from '../assets/loadingpaw.png';

export default function GameScreen(props){
    const classes = useStyles();
    const token = useSelector(state => state.lobbyReducer.token)
    const heightMatch = useMediaQuery('(max-height:800px)');

    let handleStart = () => {
        props.requestStart()
    }

    let handleLeave = () => {
        props.leaveLobby()
        props.history.push("/")
    }

    let checkDecode = () => {
        if(token === null) return false;

        let decoded = decode(token)
        return decoded.game_id === props.game._id
    }

    if(props.game === null)
        return <Redirect to={{ pathname: '/'}} />

    return(
        <div className={classes.main}>
            <div className={classes.topBar}><p style={{display: 'inline-block', margin: 0, padding: 0, paddingLeft: '30px', fontSize: 23, 
                color: 'purple', cursor: 'pointer', paddingTop: '12px'}} onClick={handleLeave}>Leave Lobby (Testing)</p></div>
            <Sidebar user={props.user} started={props.game.hasStarted} game={props.game} players={props.players}/>
            {!props.game.hasStarted && <div className={classes.loadingContainer}>
                <img alt="paw" className={classes.paw} src={paw}/>
                <div className={classes.loadingText}>{`GAME WILL BEGIN AFTER ${props.game.startTime}`}</div>
                {props.host && checkDecode() && <button className={classes.startButton} onClick={handleStart}>Start Game</button>}
                <button className={classes.startButton} onClick={handleLeave}>Leave Lobby</button>
            </div>}
            {props.game.hasStarted && <div className={classes.board} style={heightMatch ? {transform: 'scale(.88)', top: '50px'} : null}>
                <Board />
            </div>}
            <Chat playersList={props.players}/>
        </div>
    )

}

const useStyles = makeStyles(() => ({
    main: {
        backgroundColor: '#F2F2F2',
        boxShadow: '0px 32.4707px 106.268px -61.9895px rgba(0, 0, 0, 0.25);',
        height: '100vh',
        width: '100vw',
        boxSizing: 'border-box',
        overflow: 'hidden'
    },
    board: {
        position: 'absolute',
        left: '600px',
        top: '100px',
        // transform: 'scale(.9)'
    },
    startButton: {
        color: 'white',
        width: '220px',
        padding: '12px',
        backgroundColor: '#7A6E5D',
        borderRadius: '9px',
        fontSize: '30px',
        textShadow: '2px 2px 0px rgba(0, 0, 0, 0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'ChelseaMarket',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        marginTop: '20px'
    },
    topBar: {
        height: '52px',
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
        transform: 'translate(-50%, -50%)',
        minWidth: '300px'
    },
    paw: {
        height: "168px",
        zIndex: "-3"
    },
    loadingText: {
        marginTop: '50px',
        fontFamily: 'ChelseaMarket',
        fontSize: '46px',
        color: '#7A6E5D',
        textAlign: 'center'
    }
}))