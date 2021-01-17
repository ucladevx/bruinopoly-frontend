import axios from 'axios';
import Cookies from 'universal-cookie';
import {API_URL} from '../config';

const cookies = new Cookies();

const SET_USER_INFO = "SET_USER_INFO"

const SET_ROOMS_LIST = "SET_ROOMS_LIST"
const ADD_NEW_ROOM = "ADD_NEW_ROOM"
const JOIN_ROOM = "JOIN_ROOM"

const LOBBY_ERROR = "LOBBY_ERROR"
const ROOMS_ERROR = "ROOMS_ERROR"
const CREATE_ROOM_ERROR = "CREATE_ROOMS_ERROR"

const initialState = {
    userInfo: checkCookies(),
    redirectTo: JSON.stringify(checkCookies()),
    rooms: null,
    roomsError: null,
    lobbyError: null,
    createRoomError: null,
    lobby: null,
    socket: null
}

export function lobbyReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_INFO:
            return {...state, userInfo: action.userObj, redirectTo: "/"}
        case SET_ROOMS_LIST:
            return {...state, rooms: action.rooms}
        case ROOMS_ERROR:
            return {...state, roomsError: action.error}
        case CREATE_ROOM_ERROR:
            alert("Room could not be created. Something went wrong.")
            return {...state, createRoomError: action.error}
        case ADD_NEW_ROOM:
            return {...state, rooms: [...state.rooms, action.room]}
        case JOIN_ROOM:
            return {...state}
        default:
            return state;
    }
}

export const joinRoom = ({id, name, password}) => async (dispatch) => {
    //dispatch({type: JOIN_ROOM, id})
    console.log(id, name, password)
    let socket = new WebSocket(`ws://localhost:8080?room_id=${id}&name=${name}&password=${password}`);

    socket.addEventListener('open', function (event) {
        console.log("open event")
    });

    socket.addEventListener('error', function (event) {
        console.log("Error event")
    });

    socket.addEventListener('message', function(event) {
        console.log('Message from server ', event.data);
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
        dispatch({type: ROOMS_ERROR, error: e})
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
