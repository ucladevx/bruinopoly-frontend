import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Bruincard from './Bruincard'
import PlayerBanner from './PlayerBanner'
import clock from '../assets/Groupclock.png'
import mortgage from '../assets/mortgage.png'
import home from '../assets/home.png'
import trade from '../assets/trade.png'

export default function Sidebar(props){
    const classes = useStyles();
    const turn = useSelector(state => state.lobbyReducer.yourTurn)
    const players = useSelector(state => state.lobbyReducer.game.players)
    const player = useSelector(state => state.lobbyReducer.userInfo)
    const dispatch = useDispatch()

    let handleBuy = () => {
        if(!turn) return
        let person = players.filter(p => p._id === player.id)[0]

        dispatch({type: "PROPERTY_DECISION", justOpening: true, id: person.currentTile})
    }

    return(
        <div className={classes.container}>
            <div className={classes.bruinopoly}>BRUINOPOLY</div>
            <div className={classes.name}>{props.game.name.toUpperCase()}</div>
            {!props.started && <div>
                <div className={classes.timeLeft}>
                    <img alt="clock" src={clock} className={classes.clock}></img>
                    <div>0:00 left</div>
                </div>
                <div className={classes.playersText}>PLAYERS</div>
                {props.players && props.players.map((player, i)=>{
                    return <div key={i} className={classes.playersNames}>{player.name.toUpperCase()}</div>
                })}
            </div>}
            {props.started && <div className={classes.gameSidebar}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '35px'}}>
                    <div className={classes.actionButton} onClick={handleBuy}>+<img className={classes.actionImage} alt="action buy" src={home} /></div>
                    <div className={classes.actionButton}>-<img className={classes.actionImage} alt="action sell" src={home} /></div>
                    <div className={classes.actionButton}><img style={{height: '44px'}} className={classes.actionImage} alt="action trade" src={trade} /></div>
                    <div className={classes.actionButton}><img className={classes.actionImage} alt="action mortgage" src={mortgage} /></div>
                </div>
                <Bruincard user={props.game.players.filter((player)=> player._id === props.user.id)[0]} />
                <div className={classes.nameBox}>
                    {props.game && props.game.players.filter((player)=> player._id !== props.user.id).map((player, i) => {
                        return <PlayerBanner key={i} name={player.name} money={player.money} />
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
        minWidth: '416px'
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