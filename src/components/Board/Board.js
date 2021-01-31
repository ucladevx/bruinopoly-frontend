import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { positions } from '../../config'
import B from '../../assets/B.png';
import Bruinopoly from '../../assets/Bruinopoly.png';
import FinAidCards from '../../assets/Financial_Aid_Cards.png';
import ExuseMeCards from '../../assets/Exuse_Me_Cards.png';

export default function GameScreen(props){
    const classes = useStyles();

    return(
        <div className={classes.board}>
            <img className={classes.Bruinopoly} src={Bruinopoly}></img>
            <img className={classes.B} src={B}></img>
            <img className={classes.FinAidCards} src={FinAidCards}></img>
            <img className={classes.ExuseMeCards} src={ExuseMeCards}></img>
            <div className={classes.NoParking}>
                {positions[20]}
            </div>
            <div className={classes.topRail}>
                {positions.slice(21, 30)}
            </div>
            <div className={classes.GoToJail}>
                {positions[30]}
            </div>
            <div className={classes.rightRail}>
                {positions.slice(31, 40)}
            </div>
            <div className={classes.Go}>
                {positions[0]}
            </div>
            <div className={classes.bottomRail}>
                {positions.slice(1, 10)}
            </div>
            <div className={classes.Jail}>
                {positions[10]}
            </div>
            <div className={classes.leftRail}>
                {positions.slice(11, 20)}
            </div>
        </div>
        
    )

}

const useStyles = makeStyles(() => ({
    board: {
        width: '745px',
        height: '745px',
        position: 'relative',
        backgroundColor: '#F7F2E7',
        border: '1.5px solid #C4B299',
        borderRadius: '15px',
        boxSizing: 'border-box',
        boxShadow: '4px 4px 0px rgba(196, 178, 153, 0.8)'
    },
    Bruinopoly: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: '375px',
        zIndex: '1'
    },
    B: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: '225px',
        zIndex: '0'
    },
    FinAidCards: {
        position: 'absolute',
        top: '31%',
        left: '31%',
        transform: 'translate(-50%, -50%)',
        height: '215px'
    },
    ExuseMeCards: {
        position: 'absolute',
        bottom: '31%',
        right: '31%',
        transform: 'translate(50%, 50%)',
        height: '215px'
    },
    NoParking: {
        position: 'absolute',
        top: '0px',
        left: '0px'
    },
    GoToJail: {
        position: 'absolute',
        top: '0px',
        right: '0px'
    },
    Go: {
        position: 'absolute',
        bottom: '0px',
        right: '0px'
    },
    Jail: {
        position: 'absolute',
        bottom: '0px',
        left: '0px'
    },
    topRail: {
        width: '540px',
        height: '100px',
        position: 'absolute',
        top: '0px',
        left: '50%',
        transform: 'translate(-50%, 0) rotate(180deg)',
        display: 'flex',
        flexDirection: 'row-reverse',
    },
    rightRail: {
        width: '540px',
        height: '100px',
        position: 'absolute',
        right: '0px',
        top: '50%',
        transform: 'translate(calc(50% - 50px), -50%) rotate(270deg)',
        display: 'flex',
        flexDirection: 'row-reverse',
    },
    bottomRail: {
        height: '100px',
        width: '540px',
        position: 'absolute',
        bottom: '0px',
        left: '50%',
        transform: 'translate(-50%, 0)',
        display: 'flex',
        flexDirection: 'row-reverse'
    },
    leftRail: {
        height: '100px',
        width: '540px',
        position: 'absolute',
        top: '50%',
        left: '0px',
        transform: 'translate(calc(-50% + 50px), -50%) rotate(90deg)',
        display: 'flex',
        flexDirection: 'row-reverse'
    },
    corner: {
        width: '100px',
        height: '100px'
    }
}))