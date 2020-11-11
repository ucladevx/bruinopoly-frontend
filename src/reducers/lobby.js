import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const SET_USER_INFO = "SET_USER_INFO"

const SET_LOBBY_LIST = "SET_LOBBY_LIST"
const LOBBY_ERROR = "LOBBY_ERROR"

const initialState = {
    userInfo: checkCookies(),
    redirectTo: JSON.stringify(checkCookies()),
    rooms: null,
    lobbyError: null
}

export function lobbyReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_INFO:
            return {...state, userInfo: action.userObj}
        
        default:
            return state;
    }
}


export const getRooms = () => async (dispatch) => {
   console.log('get rooms')
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
    let user = cookies.get("user");

    if(user && user !== "null"){
        user = JSON.parse(user)
        if(!user.hasOwnProperty('name') || !user.hasOwnProperty('major') || !user.hasOwnProperty('year'))
            return null;
        let {name, major, email} = user
        return {name, major, email}
    }
    return null;
}
