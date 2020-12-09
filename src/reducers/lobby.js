import axios from 'axios';
import Cookies from 'universal-cookie';
import {API_URL} from '../config';

const cookies = new Cookies();

const SET_USER_INFO = "SET_USER_INFO"

const SET_ROOMS_LIST = "SET_ROOMS_LIST"
const LOBBY_ERROR = "LOBBY_ERROR"
const ROOMS_ERROR = "ROOMS_ERROR"

const initialState = {
    userInfo: checkCookies(),
    redirectTo: JSON.stringify(checkCookies()),
    rooms: null,
    roomsError: null,
    lobbyError: null,
    lobby: null
}

export function lobbyReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_INFO:
            return {...state, userInfo: action.userObj, redirectTo: "/"}
        case SET_ROOMS_LIST:
            return {...state, rooms: action.rooms}
        case ROOMS_ERROR:
            return {...state, roomsError: action.error}
        default:
            return state;
    }
}

export const joinRoom = () => async (dispatch) => {
    console.log('join room')
}

export const getRooms = () => async (dispatch) => {
    try {
        let result = await axios.get(`${API_URL}/rooms`)
        console.log(result)
         //dispatch({type: SET_ROOMS_LIST, rooms: re})
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
    //console.log(user)

    if(user && user !== "null"){
        if(!user.hasOwnProperty('name') || !user.hasOwnProperty('major') || !user.hasOwnProperty('year'))
            return null;
        let {name, major, email} = user
        return {name, major, email}
    }
    return null;
}
