import axios from 'axios';
import Cookies from 'universal-cookie';
import {API_URL} from '../config';

const cookies = new Cookies();

const SET_USER_INFO = "SET_USER_INFO"

const SET_ROOMS_LIST = "SET_ROOMS_LIST"
const ADD_NEW_ROOM = "ADD_NEW_ROOM"
const JOIN_ROOM = "JOIN_ROOM"

const LOBBY_ERROR = "LOBBY_ERROR"
const JOIN_ROOM_ERROR = "JOIN_ROOM_ERROR"
const CREATE_ROOM_ERROR = "CREATE_ROOMS_ERROR"

const UPDATE_PLAYERS = "UPDATE_PLAYERS"

const initialState = {
    userInfo: checkCookies(),
    redirectTo: JSON.stringify(checkCookies()),
    rooms: null,
    socket: null,
    lobbyError: null,
    joinRoomError: null,
    createRoomError: null,
    players: null,
    gameID: null,
    game: null,
}

export function lobbyReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_INFO:
            return {...state, userInfo: action.userObj, redirectTo: "/"}
        case SET_ROOMS_LIST:
            return {...state, rooms: action.rooms}
        case LOBBY_ERROR:
            return {...state, lobbyError: action.error}
        case JOIN_ROOM_ERROR:
            return {...state, joinRoomError: action.error}
        case CREATE_ROOM_ERROR:
            alert("Room could not be created. Something went wrong.")
            return {...state, createRoomError: action.error}
        case ADD_NEW_ROOM:
            return {...state, rooms: [...state.rooms, action.room]}
        case JOIN_ROOM:
            return {...state, gameID: action.id, game: action.room}
        case UPDATE_PLAYERS:
            return {...state, players: action.players}
        default:
            return state;
    }
}

export const joinRoom = ({id, name, password}) => async (dispatch) => {
    console.log(id, name, password)
    let socket = new WebSocket(`ws://localhost:8080?room_id=${id}&name=${name}&password=${password}`);

    socket.addEventListener('open', function (event) {
        console.log("open event")
    });

    socket.addEventListener('error', function (event) {
        console.log("Error event")
    });

    socket.addEventListener('message', function(event) {
        let data = JSON.parse(event.data)
        console.log('Message from server ', data);

        switch(data[0]){
            case 'join-error':
                dispatch({type: JOIN_ROOM_ERROR, error: data[1].message})
                break;
            case 'playerlist':
                dispatch({type: UPDATE_PLAYERS, players: data[1].message})
                break;
            case 'join':    
                dispatch({type: JOIN_ROOM, id, room: data[1].roomData})
                break;
            default:
                console.log("default case")
        }
    })
}

export const createRoom = (data) => async (dispatch) => {
    if(data.name === "" || data.startTime === "" || data.timeLimit === ""){
        dispatch({type: CREATE_ROOM_ERROR, error: "All rooms require a name, a start time, and a time limit."})
        return
    }
    
    console.log(data)
    try {  
        let result = await axios.post(`${API_URL}/rooms`, data);
        console.log(result.data);
        dispatch({type: ADD_NEW_ROOM, room: result.data})
    } catch(e){
        dispatch({type: CREATE_ROOM_ERROR, error: e})
    }
}

export const getRooms = () => async (dispatch) => {
    try {
        let result = await axios.get(`${API_URL}/rooms`)
        console.log(result.data)
        dispatch({type: SET_ROOMS_LIST, rooms: result.data.rooms})
    } catch(e){
        console.log(e)
        dispatch({type: LOBBY_ERROR, error: e})
    }
   
};

export const setUserInfo = (info) => async (dispatch) => {
    let {name, major, year} = info;
    if(!name || name === ""){
        return
    }
    cookies.set('user', JSON.stringify(info))

    dispatch({type: SET_USER_INFO, userObj: info})

};

function checkCookies() {
    //cookies.remove('user')
    let user = cookies.get("user");
    console.log(user)

    if(user && user !== "null"){
        if(!user.hasOwnProperty('name') || !user.hasOwnProperty('major') || !user.hasOwnProperty('year'))
            return null;
        let {name, major, email} = user
        return {name, major, email}
    }
    return null;
}
