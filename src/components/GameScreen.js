import React, {useState} from 'react';
import Board from './Board/Board';
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from './Sidebar';
import Chat from './Chat';

import paw from '../assets/loadingpaw.png';

export default function GameScreen(props){
    console.log(props)
    const classes = useStyles();

    const [started, changeStart] = useState(true)

    return(
        <div className={classes.main}>
            <div className={classes.topBar}></div>
            <Sidebar user={props.user} started={started} name={props.game.name} playersList={props.players}/>
            {!started && <div className={classes.loadingContainer}>
                <img alt="paw" className={classes.paw} src={paw}/>
                <div className={classes.loadingText}>{`GAME WILL BEGIN AT ${props.game.startTime}`}</div>
            </div>}
            {started && <div className={classes.board}>
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
    },
    board: {
        position: 'absolute',
        right: '250px',
        top: '110px'
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