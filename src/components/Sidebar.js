import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Bruincard from './Bruincard'
import PlayerBanner from './PlayerBanner'
import clock from '../assets/Groupclock.png'
import mortgage from '../assets/mortgage.png'
import home from '../assets/home.png'
import trade from '../assets/trade.png'
import {playerDetails} from '../config'
import {parseISO, differenceInSeconds} from 'date-fns'

export default function Sidebar(props){
    const classes = useStyles();
    const turn = useSelector(state => state.lobbyReducer.yourTurn)
    const players = useSelector(state => state.lobbyReducer.game.players)
    const player = useSelector(state => state.lobbyReducer.userInfo)
    const [timeLeft, setTimeLeft] = useState("00:00")
    const dispatch = useDispatch()

    useEffect(()=>{
        let diffSec = differenceInSeconds(parseISO(props.game.startDate), new Date())
        console.log("start time:",parseISO(props.game.startDate))

        if(diffSec/60 > 60){
            setTimeLeft("60:00+")
        } else if(diffSec <= 0){
            setTimeLeft("00:00")
        } else {
            setTimeLeft(`${Math.floor(diffSec/60)}:${diffSec % 60}`) 
        }

        let interval = setInterval(()=>{
            if(diffSec <= 0) return;

            diffSec -= 1

            if(diffSec/60 > 60){
                setTimeLeft("60:00+")
            } else {
                let sec = (diffSec % 60)
                setTimeLeft(`${Math.floor(diffSec/60)}:${sec<10? ("0"+sec) :sec}`) 
            }
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    let handleTrade = () => {
        dispatch({type: "OPEN_TRADE"})
    }

    let handleOpenProperty  = (buy) => {
        //remove after testing
        //dispatch({type: "BUY_ALL_PROPERTIES"})
        if(buy)
            dispatch({type: "OPEN_BUY_DORM"})
        else    
            dispatch({type: "OPEN_SELL_DORM"})
    }

    let handleOpenMortgage = () => {
        dispatch({type: "OPEN_MORTGAGE"})
    }


    return(
        <div className={classes.container}>
            <div className={classes.bruinopoly}>BRUINOPOLY</div>
            <div className={classes.name}>{props.game.name.toUpperCase()}</div>
            {!props.started && <div>
                <div className={classes.timeLeft}>
                    <img alt="clock" src={clock} className={classes.clock}></img>
                    <div>{!props.started ? timeLeft : timeLeft} left</div>
                </div>
                <div className={classes.playersText}>PLAYERS</div>
                {props.players && props.players.map((player, i)=>{
                    return <div key={i} className={classes.playersNames}>{player.name.toUpperCase()}</div>
                })}
            </div>}
            {props.started && <div className={classes.gameSidebar}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '35px'}}>
                    <div className={classes.actionButton} onClick={()=> handleOpenProperty(true)}>+<img className={classes.actionImage} alt="action buy" src={home} /></div>
                    <div className={classes.actionButton} onClick={()=> handleOpenProperty(false)}>-<img className={classes.actionImage} alt="action sell" src={home} /></div>
                    <div className={classes.actionButton} onClick={handleTrade}><img style={{height: '44px'}} className={classes.actionImage} alt="action trade" src={trade} /></div>
                    <div className={classes.actionButton} onClick={handleOpenMortgage}><img className={classes.actionImage} alt="action mortgage" src={mortgage} /></div>
                </div>
                <Bruincard user={props.game.players.filter((player)=> player._id === props.user.id)[0]} info={[props.user.id, props.game.players]} />
                <div className={classes.nameBox}>
                    {props.game && props.game.players.map((player, i) => {
                        if(player._id === props.user.id) return null;
                        return <PlayerBanner key={i} name={player.name} money={player.money} token={playerDetails[i].img} />
                    })}
                </div>
            </div>}
        </div>
    )

}

const useStyles = makeStyles(() => ({
    container: {
        margin: '50px 0px 0px 50px',
        fontFamily: 'VCR',
        width: '25%',
        minWidth: '416px',
        height: '100%'
    },
    actionButton: {
        width: '82px',
        height: '69px',
        borderRadius: '5px',
        backgroundColor: '#7A6E5D',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '34px',
        color: 'white',
        fontWeight: 'bold'
    },
    actionImage: {
        height: '56px'
    },
    gameSidebar: {
        paddingTop: '30px'
    },
    bruinopoly: {
        fontFamily: 'ChelseaMarket',
        fontSize: '44px',
        lineHeight: '25px',
        color: '#433F36',
        marginBottom: '10px'
    },
    name: {
        fontSize: '32px',
        lineHeight: '46px',
        color: '#433F36'
    },
    timeLeft: {
        margin: '40px 0px 40px 0px',
        backgroundColor: '#7A6E5D',
        borderRadius: '12px',
        height: '61px',
        width: '267px',
        color: 'white',
        fontSize: '32px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    clock: {
        height: '80%',
    },
    playersText: {
        margin: '25px 0px 25px 0px',
        color: '#433F36',
        fontSize: '29px',
        lineHeight: '28px'
    },
    playersNames: {
        margin: '15px 0px 15px 0px',
        color: '#7A6E5D',
        fontSize: '29px',
        lineHeight: '28px'
    },
    nameBox: {
        marginTop: '14px',
        height: '380px',
        overflow: 'scroll'
    }
}))