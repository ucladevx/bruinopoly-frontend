import React, {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
// import bruinopoly from '../assets/bruinopoly.png'
import Room from '../components/Room.js'
import { FormHelperText } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import blob1 from '../assets/blob1.png'
import blob2 from '../assets/blob2.png'
import dropdown from '../assets/dropdown.png'
import {times, minGameTime} from '../config'

export default function Lobby(props){
    const classes = useStyles();
    const [joinRoom, setJoinRoom] = useState(false)

    const [display, setDisplay] = useState(false);
    const [name, setName] = useState("");
    const [time, setTime] = useState("");
    const [length, setLength] = useState("00 MINS");
    const [publicLobby, setPublic] = useState(true);
    const [password, setPassword] = useState("");

    const [showPasswordAttempt, setPasswordAttemptBox] = useState(false)
    const [savedID, storeID] = useState("")
    const [passwordJoin, setPasswordJoin] = useState("")

    useEffect(()=>{
        props.getRooms()
    }, [])

    useEffect(()=>{
        if(props.id !== null){
            setJoinRoom(true)
        }
    }, [props.id])

    //doesn't seem to work
    if(props.redirect === null){
        return <Redirect to={{ pathname: '/signup' }} />
    }
    if(joinRoom){
        return <Redirect to={{ pathname: `/game/${props.id}`}} />
    }

    let handleClick = (id, isPrivate) => {
        if(isPrivate){
            setPasswordAttemptBox(true)
            storeID(id)
            return
        }

        props.joinRoom({password: "", id, name: props.user.name})
    }

    let handlePasswordJoin = (e) => {
        e.preventDefault()

        let obj = {
            password: passwordJoin,
            id: savedID,
            name: props.user.name
        }
        setPasswordAttemptBox(false);
        setPasswordJoin("");

        props.joinRoom(obj)
    }

    let handleCreateRoom = () => {
        setDisplay(false);
        let obj = {
            name: name,
            startTime: time,
            password: password,
            timeLimit: length,
            isPrivate: !publicLobby,
            hostPlayerName: props.user ? props.user.name : ""
        }
        props.createRoom(obj);
    }

    
    return (
        <div className={classes.wrapper}>
        {showPasswordAttempt && <div className={classes.blur}><div className={classes.createRoomPopup} style={{height: '150px', width: '400px'}}>
            <form style={{margin: 0, padding: 0, marginTop: '50px', marginLeft: '50px'}} onSubmit={handlePasswordJoin}>
                <input style={{width: '80%', height: '45px'}} className={classes.roomInput} placeholder="ROOM PASSWORD..." value={passwordJoin} 
                    onChange={(e)=>{setPasswordJoin(e.target.value)}} />
            </form>
        </div></div>}
        {display && <div className={classes.blur}><div className={classes.createRoomPopup} style={!publicLobby ? {height: '630px'} : null}>
                <div style={{display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', height:'100%'}}>
                    <div className={classes.deleteCreateGame}><ClearIcon onClick={() => setDisplay(false)}/></div>
                    <div className={classes.createRoomText}>CREATE ROOM</div>
                    <div className={classes.createRoomOptionsHolder} style={{justifyContent: 'center'}}>
                        <button className={classes.createRoomOptions} style={{backgroundColor: publicLobby ? '#7A6E5D' : '#C4B299'}} 
                            onClick={()=>{setPublic(true)}}><div>PUBLIC</div></button>
                        <button className={classes.createRoomOptions} style={{backgroundColor: !publicLobby ? '#7A6E5D' : '#C4B299', marginLeft: '20px'}} 
                            onClick={()=>{setPublic(false)}}><div>PRIVATE</div></button>
                    </div>
                    <div className={classes.createRoomOptionsHolder}>
                        <div className={classes.roomOptionsText}>ROOM NAME: </div>
                        <input className={classes.roomInput} placeholder="NAME..."
                        onChange={(e)=>{setName(e.target.value)}} />
                    </div>
                    <div className={classes.createRoomOptionsHolder}>
                        <div className={classes.roomOptionsText}>GAME TIME: </div>
                            <select className={` ${classes.roomFormInput} ${classes.dropdownStyle}`} placeholder="12:00 PM PST"
                            list='times' onChange={(e)=>{setTime(e.target.value)}}>
                                {times.map((time, i)=>{
                                    return <option key={i} value={time}>{time}</option>
                                })}
                            </select>
                    </div>
                    <div className={classes.createRoomOptionsHolder}>
                        <div className={classes.roomOptionsText}>TIME LIMIT: </div>
                        <select value={length} className={`${classes.roomInput} ${classes.dropdownStyle}`} placeholder="in minutes"
                            onChange={(e)=>{setLength(e.target.value)}} >
                            {Array.apply(null, Array(12)).map((v, i)=>{
                                return <option key={i} value={10*i+minGameTime}>{15*i+minGameTime} MIN</option>
                            })}
                        </select>
                    </div>
                    {!publicLobby && <div className={classes.createRoomOptionsHolder}>
                        <div className={classes.roomOptionsText}>PASSWORD: </div>
                        <input value={password} className={classes.roomInput} placeholder="PASSWORD..."
                            onChange={(e)=>{setPassword(e.target.value)}} />
                    </div>}
                    <button onClick={handleCreateRoom} className={classes.createRoomOptions} style={{backgroundColor: '#7A6E5D', width: '240px'}}><div>CREATE</div></button>
                </div>
        </div></div>}
        <div className={classes.main}>
            <img className={classes.blob1} src={blob1}></img>
            <img className={classes.blob2} src={blob2}></img>
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
                    <button className={classes.option} onClick={() => setDisplay(true)}><div>CREATE ROOM</div></button>
                    <button className={classes.option}><div>ABOUT</div></button>
                    <button className={classes.option}><div>CONTACT</div></button>
                </div>
                <div className={classes.roomsText} style={{backgroundColor: '#A8DDD7'}}><div>SUGGESTED ROOMS</div></div>
                <div className={classes.roomsText} style={{backgroundColor: '#DC9F96'}}><div>AVAILABLE ROOMS</div></div>
                <div className={classes.rooms}>
                    {props.rooms && props.rooms.map((room, i)=>{
                        return  <Room onClick={()=>{handleClick(room._id, room.isPrivate)}} key={i} name={room.name} gameTime={room.startTime}
                        numberOfPlayers={room.players.length} />
                    })} 
                </div>
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
    blob1: {
        position: 'fixed',
        top: '5%',
        right: '5%',
        height: '50%',
        zIndex: '-2'
    },
    blob2: {
        position: 'fixed',
        bottom: '5%',
        left: '5%',
        height: '50%',
        zIndex: '-2',
        filter: "blur(10px)"
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
    },
    blur: {
        position: 'fixed',
        height: '100%',
        width: '100%',
        backdropFilter: 'blur(5px)',
        zIndex: '3'
    },
    createRoomPopup: {
        fontFamily: 'ChelseaMarket',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '3',
        width: '661px',
        height: '560px',
        backgroundColor: "#DED3C1",
        border: '3px solid #C4B299',
        boxShadow: '4px 4px 0px #C4B299',
        borderRadius: '26px',
    },
    deleteCreateGame: {
        color: "white",
        backgroundColor: '#C4B299',
        borderRadius: '50%',
        width: '30px',
        height: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '17px',
        right: '17px',
        fontWeight: 'bold',
        cursor: 'pointer'
    },
    createRoomText: {
        color: '#A8DDD7',
        fontSize: '55px',
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
        // alignItems: 'center,
        margin: '10px'
    },
    createRoomOptions: {
        color: 'white',
        width: '47%',
        borderRadius: '9px',
        fontSize: '32px',
        textShadow: '2px 2px 0px rgba(0, 0, 0, 0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'ChelseaMarket',
        border: 'none',
        outline: 'none',
        cursor: 'pointer'
    },
    roomOptionsText: {
        color: 'white',
        fontSize: '35px',
        textShadow: '2px 2px 2px #433F36',
    },
    roomInput: {
        backgroundColor: '#EFE9DB',
        borderRadius: '9px',
        width: '50%',
        fontFamily: 'VCR',
        fontSize: '30px',
        paddingLeft: '5%',
        border: 'none',
        outline: 'none',
    },
    roomFormInput: {
        height: '100%',
        width: '54%',
        paddingLeft: '20px',
        border: 'none',
        outline: 'none',
        fontFamily: 'VCR',
        fontSize: '30px',
        backgroundColor: '#EFE9DB',
        borderRadius: '9px'
    },
    dropdownStyle: {
        backgroundImage: `url(${dropdown})`,
        backgroundPosition: '97% 52%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '22px 22px',
        webkitAppearance: 'none',
        mozAppearance: 'none',
        appearance: 'none',
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
        maxWidth: '875px',
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
        fontFamily: 'ChelseaMarket',
        outline: 'none',
        cursor: 'pointer'
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