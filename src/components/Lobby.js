import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import bruinopoly from '../assets/bruinopoly.png'
import Room from '../components/Room.js'
import { FormHelperText } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';


export default function Lobby(props){

    const [displayCreateGame, setDisplayCreateGame] = useState("none");
    const [createGameName, setCreateGameName] = useState("")
    const [createGameTime, setCreateGameTime] = useState("")

    const classes = useStyles();

    var timesList = []
    for(var i = 0; i < 12; i++){
        timesList.push(
            <option value={(i+1) + ":00 PM PST"}/>
        )
        timesList.push(
            <option value={(i+1) + ":30 PM PST"}/>
        )
        timesList.push(
            <option value={(i+1) + ":00 AM PST"}/>
        )
        timesList.push(
            <option value={(i+1) + ":30 AM PST"}/>
        )
    }

    var suggestedRooms = []
    for(var i = 0; i < 7; i++){
        suggestedRooms.push(
            <Room roomNumber='10' gameTime='2:00 PM'
                numberOfPlayers='4'></Room>
        )
    }


    return (
        <div className={classes.wrapper}>
        <div className={classes.createRoomPopup}
            style={{display: displayCreateGame}}>
                <div style={{display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', height:'100%'}}>
                    <div className={classes.deleteCreateGame}><ClearIcon onClick={() => setDisplayCreateGame("none")}/></div>
                    <div className={classes.createRoomText}>CREATE ROOM</div>
                    <div className={classes.createRoomOptionsHolder}>
                        <button className={classes.createRoomOptions}><div>PUBLIC</div></button>
                        <button className={classes.createRoomOptions}><div>PRIVATE</div></button>
                    </div>
                    <div className={classes.createRoomOptionsHolder}>
                        <div className={classes.roomOptionsText}>ROOM NAME: </div>
                        <input className={classes.roomInput} placeholder="Name..."
                        onChange={(e)=>{setCreateGameName(e.target.value)}}></input>
                    </div>
                    <div className={classes.createRoomOptionsHolder}>
                        <div className={classes.roomOptionsText}>GAME TIME: </div>
                        <form className={classes.roomForm}>
                            <input className={classes.roomFormInput} placeholder="12:00 PM PST"
                            list='times' onChange={(e)=>{setCreateGameTime(e.target.value)}}></input>
                            <datalist id='times'>{timesList}</datalist>
                        </form>
                    </div>
                    <button className={classes.createRoomOptions} style={{backgroundColor: '#7A6E5D'}}><div>CREATE</div></button>
                </div>
        </div>
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
                    <button className={classes.option} onClick={() => setDisplayCreateGame("initial")}><div>CREATE ROOM</div></button>
                    <button className={classes.option}><div>ABOUT</div></button>
                    <button className={classes.option}><div>CONTACT</div></button>
                </div>
                <div className={classes.roomsText} style={{backgroundColor: '#A8DDD7'}}><div>SUGGESTED ROOMS</div></div>
                <div className={classes.rooms}>{suggestedRooms}</div>
                <div className={classes.roomsText} style={{backgroundColor: '#DC9F96'}}><div>AVAILABLE ROOMS</div></div>
                <div className={classes.rooms}>{suggestedRooms}</div>
            </div>
        </div>
        </div>
    )
}

const useStyles = makeStyles(() => ({
    wrapper: {
        position: 'relative',
        width: '100vw'
    },
    main: {
        position: 'absolute',
        top: '0',
        left: '50%',
        width: '100vw',
        transform: 'translate(-50%, 0)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'ChelseaMarket',
        zIndex: '-100'
    },
    createRoomPopup: {
        //display: 'none',
        fontFamily: 'ChelseaMarket',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '100',
        width: '661px',
        height: '500px',
        backgroundColor: "#DED3C1",
        border: '10px solid #C4B299',
        boxShadow: '10px 10px 0px #C4B299',
        borderRadius: '50px',
    },
    deleteCreateGame: {
        color: "white",
        backgroundColor: '#C4B299',
        borderRadius: '50%',
        width: '45px',
        height: '45px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '10px',
        right: '10px',
        fontWeight: 'bold'
    },
    createRoomText: {
        color: '#A8DDD7',
        fontSize: '70px',
        textAlign: 'center',
        margin: '5px',
        marginTop: '20px',
        textShadow: '2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff'
    },
    createRoomOptionsHolder: {
        width: '90%',
        height: '60px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '10px'
    },
    createRoomOptions: {
        color: 'white',
        backgroundColor: '#C4B299',
        width: '45%',
        borderRadius: '20px',
        fontSize: '42px',
        textShadow: '2px 2px 0px rgba(0, 0, 0, 0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'ChelseaMarket',
        border: 'none'
    },
    roomOptionsText: {
        color: 'white',
        fontSize: '42px',
        textShadow: '2px 2px 2px #433F36',
    },
    roomInput: {
        backgroundColor: '#EFE9DB',
        borderRadius: '20px',
        width: '40%',
        fontFamily: 'VCR',
        fontSize: '30px',
        paddingLeft: '5%',
        border: 'none',
        outline: 'none',
    },
    roomForm: {
        backgroundColor: '#EFE9DB',
        borderRadius: '20px',
        width: '45%',
        fontFamily: 'VCR',
        fontSize: '30px',
        border: 'none',
        outline: 'none',
    },
    roomFormInput: {
        height: '100%',
        width: '90%',
        paddingLeft: '10%',
        border: 'none',
        outline: 'none',
        fontFamily: 'VCR',
        fontSize: '30px',
        backgroundColor: '#EFE9DB',
        borderRadius: '20px',
    },
    bruinopolyText: {
        margin: '20px',
        fontSize: '100px',
        lineHeight: '127px',
        textAlign: 'center',
        color: '#A8DDD7',
        //border: '7px solid #FFFFFF',
        //textShadow: '10px 10px 0px rgba(0, 0, 0, 0.25)',
        textShadow: '3px 0 0 #fff, -3px 0 0 #fff, 0 3px 0 #fff, 0 -3px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 7px 7px 0px rgba(0, 0, 0, 0.25)',
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
        textShadow: '1px 0 0 #000, -1px 0 0 #000, 0 1px 0 #000, 0 -1px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 5px 5px 0px #DC9F96, 0px 3px 3px rgba(0, 0, 0, 0.25)',
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
        textShadow: '1px 0 0 #000, -1px 0 0 #000, 0 1px 0 #000, 0 -1px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 2px 2px 0px #433F36',
        //textShadow: '2px 2px 0px #433F36',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'ChelseaMarket'
    },
    roomsText: {
        margin: '8px',
        width: '90%',
        height: '70px',
        borderRadius: '17.7303px',
        fontSize: '40px',
        color: '#FFFFFF',
        textShadow: '1px 0 0 #000, -1px 0 0 #000, 0 1px 0 #000, 0 -1px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 4px 4px 0px #433F36',
        //textShadow: '4px 4px 0px #433F36',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    rooms: {
        width: '90%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(184px, 1fr))',
        justifyItems: 'center'
    }
}))