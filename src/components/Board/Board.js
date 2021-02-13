import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { positions } from '../../config'
import B from '../../assets/B.png';
import Bruinopoly from '../../assets/bruinopoly.png';
import FinAidCards from '../../assets/Financial_Aid_Cards.png';
import ExuseMeCards from '../../assets/Exuse_Me_Cards.png';

import SalePopup from './SalePopup'
import CardPopup from './CardPopup'

export default function Board(props){
    const classes = useStyles();
    console.log(props)

    return(
        <div className={classes.board}>
            {props.salePopup && <SalePopup />}
            {props.cardPopup && props.cardPopup.show && <CardPopup info={props.cardPopup} />}
            {props.turn && <DiceBox />}
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

function DiceBox(){
    const classes = diceStyles();
    const [left, updateLeft] = useState(2)
    const [right, updateRight] = useState(1)
    const [haveRolled, updateRolled] = useState(false)

    let handleRoll = async () => {
        if(haveRolled) return
        updateRolled(true)
        for(let i = 0; i < 13; i++){
            updateLeft(Math.floor(Math.random()*6+1))
            updateRight(Math.floor(Math.random()*6+1))
            await sleep(0.1)
        }
        //send roll to server, move the person left+right tiles
    }

    let sleep = (sec) => {
        return new Promise((res, rej)=>{
            setTimeout(()=>{res()}, sec*1000)
        })
    }

    return (
        <div className={classes.diceBox}>
            <button onClick={handleRoll} className={classes.roll}>ROLL</button>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Dice number={left}/>
                <Dice number={right}/>
            </div>
        </div>
    )
}

function Dice(props){
    const classes = diceStyles();

    return (
        <div className={classes.dice}>
            {(props.number === 1 ? (
                <div>
                    <div className={classes.circle} style={{left: '18px', top: '18px'}}></div>
                </div>
            ) : (props.number === 2 ? (
                <div>
                    <div className={classes.circle} style={{left: '6px', top: '6px'}}></div>
                    <div className={classes.circle} style={{right: '6px', bottom: '6px'}}></div>
                </div>
            ) : (props.number === 3 ? (
                <div>
                   <div className={classes.circle} style={{left: '6px', bottom: '6px'}}></div>
                    <div className={classes.circle} style={{right: '6px', top: '6px'}}></div>
                    <div className={classes.circle} style={{right: '18px', top: '18px'}}></div>
                </div>
            ) : (props.number === 4 ? (
                <div>
                   <div className={classes.circle} style={{left: '6px', bottom: '6px'}}></div>
                   <div className={classes.circle} style={{right: '6px', bottom: '6px'}}></div>
                   <div className={classes.circle} style={{left: '6px', top: '6px'}}></div>
                   <div className={classes.circle} style={{right: '6px', top: '6px'}}></div>
                </div>
            ) : (props.number === 5 ? (
                <div>
                   <div className={classes.circle} style={{left: '6px', bottom: '6px'}}></div>
                   <div className={classes.circle} style={{right: '6px', bottom: '6px'}}></div>
                   <div className={classes.circle} style={{left: '6px', top: '6px'}}></div>
                   <div className={classes.circle} style={{right: '6px', top: '6px'}}></div>
                   <div className={classes.circle} style={{left: '18px', top: '18px'}}></div>
                </div>
            ) : (props.number === 6 ? (
                <div>
                   <div className={classes.circle} style={{left: '6px', bottom: '6px'}}></div>
                   <div className={classes.circle} style={{right: '6px', bottom: '6px'}}></div>
                   <div className={classes.circle} style={{left: '6px', top: '6px'}}></div>
                   <div className={classes.circle} style={{right: '6px', top: '6px'}}></div>
                   <div className={classes.circle} style={{right: '6px', top: '18px'}}></div>
                   <div className={classes.circle} style={{left: '6px', top: '18px'}}></div>
                </div>
            ) : null))))))}
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

const diceStyles = makeStyles(() => ({
    diceBox: {
        width: '104px',
        height: '86px',
        position: 'absolute',
        left: '115px',
        bottom: '115px',
        zIndex: 5,
    },
    roll: {
        width: '104px',
        height: '30px',
        textAlign: 'center',
        fontFamily: 'ChelseaMarket',
        fontSize: '20px',
        borderRadius: '5px',
        backgroundColor: '#C5B49C',
        border: 'none',
        cursor: 'pointer',
        marginBottom: '10px',
        color: 'white',
        outline: 'none'
    },
    dice: {
        backgroundColor: 'white',
        borderRadius: '5px',
        boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.15)',
        height: '46px',
        width: '46px',
        border: '0.5px solid #C1C1C1',
        position: 'relative'
    },
    circle: {
        height: '10px',
        width: '10px',
        backgroundColor: 'black',
        borderRadius: '50%',
        position: 'absolute'
    }
}))