import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import bruinopoly from '../assets/bruinopoly.png'
import Room from '../components/Room.js'
import { FormHelperText } from '@material-ui/core';



export default function Lobby(props){

    const classes = useStyles();

    var suggestedRooms = []
    for(var i = 0; i < 7; i++){
        suggestedRooms.push(
            <Room roomNumber='10' gameTime='2:00 PM'
                numberOfPlayers='4'></Room>
        )
    }


    return (
        <div className={classes.main}>
            <div className={classes.bruinopolyText}>BRUINOPOLY</div> 
            <div className={classes.lobbyBox}>
                <div className={classes.lobbyText}>
                    <span style={{transform: 'rotate(-7.11deg) translate(0px, 8px)'}}>L</span>
                    <span style={{transform: 'rotate(-0.78deg) translate(0px, 2px)'}}>O</span>
                    <span style={{transform: 'rotate(0.16deg)'}}>B</span>
                    <span style={{transform: 'rotate(4.48deg) translate(0px, 2px)'}}>B</span>
                    <span style={{transform: 'rotate(5.99deg) translate(0px, 8px)'}}>Y</span>
                </div>
                <div className={classes.optionsBox}>
                    <div className={classes.option}><div>CREATE ROOM</div></div>
                    <div className={classes.option}><div>ABOUT</div></div>
                    <div className={classes.option}><div>CONTACT</div></div>
                </div>
                <div className={classes.roomsText} style={{backgroundColor: '#A8DDD7'}}><div>SUGGESTED ROOMS</div></div>
                <div className={classes.rooms}>{suggestedRooms}</div>
                <div className={classes.roomsText} style={{backgroundColor: '#DC9F96'}}><div>AVAILABLE ROOMS</div></div>
                <div className={classes.rooms}>{suggestedRooms}</div>
            </div>
        </div>
    )
}

const useStyles = makeStyles(() => ({
    main: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'ChelseaMarket',
    },
    bruinopolyText: {
        margin: '20px',
        fontSize: '100px',
        lineHeight: '127px',
        textAlign: 'center',
        color: '#A8DDD7',
        //border: '7px solid #FFFFFF',
        textShadow: '10px 10px 0px rgba(0, 0, 0, 0.25)'
    },
    lobbyBox: {
        marginBottom: '40px',
        width: '71%',
        backgroundColor: '#F7F2E7',
        border: '3px solid #C4B299',
        boxSizing: 'border-box',
        boxShadow: '10px 10px 0px #C4B299',
        borderRadius: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    lobbyText: {
        color: '#F6C811',
        fontFamily: 'ChelseaMarket',
        fontSize: '85px',
        textShadow: '7.91948px 7.91948px 0px #DC9F96, 0px 4.52542px 4.52542px rgba(0, 0, 0, 0.25)',
        lineHeight: '108px',
        display: 'flex',
        margin: '15px'
    },
    optionsBox: {
        margin: '8px',
        width: '90%',
        height: '50px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    option: {
        width: '30%',
        height: '100%',
        backgroundColor: '#DED3C1',
        border: '2.06734px solid #7A6E5D',
        boxSizing: 'border-box',
        borderRadius: '10.3367px',
        fontSize: '22px',
        color: '#FFFFFF',
        textShadow: '2.75646px 2.75646px 0px #433F36',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    roomsText: {
        margin: '8px',
        width: '90%',
        height: '70px',
        borderRadius: '17.7303px',
        fontSize: '40px',
        color: '#FFFFFF',
        textShadow: '4.43257px 4.43257px 0px #433F36',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    rooms: {
        width: '90%',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-between'
    }
}))