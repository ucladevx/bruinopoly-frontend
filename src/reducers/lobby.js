import axios from 'axios';
import Cookies from 'universal-cookie';
import {API_URL, sleep} from '../config';

const cookies = new Cookies();

const SET_USER_INFO = "SET_USER_INFO"

const SET_ROOMS_LIST = "SET_ROOMS_LIST"
const ADD_NEW_ROOM = "ADD_NEW_ROOM"
const JOIN_ROOM = "JOIN_ROOM"
const LEAVE_ROOM = "LEAVE_ROOM"

const LOBBY_ERROR = "LOBBY_ERROR"
const JOIN_ROOM_ERROR = "JOIN_ROOM_ERROR"
const CREATE_ROOM_ERROR = "CREATE_ROOMS_ERROR"

const REQUEST_START = "REQUEST_START"
const START_GAME = "START_GAME"
const SET_HOST = "SET_HOST"
const UPDATE_PLAYERS = "UPDATE_PLAYERS"
const ADD_MESSAGE = "ADD_MESSAGE"
const SET_SOCKET = "SET_SOCKET"

const MOVE_ONE = "MOVE_ONE"
const MOVEMENT = "MOVEMENT"

const initialState = {
    userInfo: null,
    redirectTo: null,
    rooms: null,
    socket: null,
    lobbyError: null,
    joinRoomError: null,
    createRoomError: null,
    players: null,
    gameID: null,
    isHost: false,
    game: null,
    yourTurn: true,
    token: null,
    messages: []
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
            if(state.socket != null && typeof state.socket.close !== "undefined")
                state.socket.close()
            return {...state, joinRoomError: action.error, gameID: null, game: null, players: null, socket: null}
        case CREATE_ROOM_ERROR:
            alert("Room could not be created. Something went wrong.")
            return {...state, createRoomError: action.error}
        case ADD_NEW_ROOM:
            return {...state, rooms: [...state.rooms, action.room], token: action.token}
        case JOIN_ROOM:
            let playerId = null; 
            action.room.players.forEach((player)=> { 
                if(player.name == state.userInfo.name)
                    playerId = player._id
            })

            return {...state, gameID: action.id, game: action.room, lobbyError: null, joinRoomError: null, createRoomError: null, userInfo: {...state.userInfo, id: playerId}}
        case LEAVE_ROOM:
            if(state.socket != null && typeof state.socket.close !== "undefined")
                state.socket.close()
            return {...state, gameID: null, isHost: false, messages: [], players: null, game: null, socket: null}
        case UPDATE_PLAYERS:
            return {...state, players: action.players}
        case ADD_MESSAGE:
            if(state.socket != null && action.send){
                //console.log(state.socket)
                state.socket.send(JSON.stringify(['message', action.message]))
            }
            return {...state, messages: [...state.messages, action.message]}
        case REQUEST_START: 
            if(state.socket != null)
                state.socket.send(JSON.stringify(['request-start']))
        case SET_SOCKET:
            return {...state, socket: action.socket}
        case SET_HOST: 
            return {...state, isHost: true}
        case START_GAME:
            return {...state, game: {...state.game, hasStarted: true}}
        case MOVE_ONE:
            return {...state, game: {...state.game, players: state.game.players.map((player)=>{
                if(player.id !== action.id) return player
                else return {...player, currentTile: (player.currentTile + 1)%40}
            })}}
        case MOVEMENT:
            if(state.socket != null){
                state.socket.send(JSON.stringify(['game-events', [{type: 'MOVEMENT', playerId: state.userInfo.id, numTiles: action.movement}] ]))
            }
            return {...state}
        default:
            return state;
    }
}

export const joinRoom = ({id, name, password, token}) => async (dispatch) => {
    console.log(id, name, password)
    let socket = new WebSocket(`ws://localhost:8080?room_id=${id}&name=${name}&password=${password}&token=${token}`);
    

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
            case 'message':
                console.log(data[1])
                dispatch({type: ADD_MESSAGE, message: data[1], send: false})
                break;
            case 'host':
                dispatch({type: SET_HOST})
                break;
            case 'can-start':
                dispatch({type: START_GAME})
                break;
            default:
                console.log("default case")
        }
    })
    dispatch({type: SET_SOCKET, socket})
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
        dispatch({type: ADD_NEW_ROOM, room: result.data.room, token: result.data.token})
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

export const addMessage = (message) => async (dispatch) => {
    dispatch({type: ADD_MESSAGE, message, send: true})
};

export const requestStart = () => async (dispatch) => {
    dispatch({type: REQUEST_START})
};

export const leaveLobby = () => async (dispatch) => {
    dispatch({type: LEAVE_ROOM})
};

export const handleMovement = ({movement, id}) => async (dispatch) => {
    dispatch({type: MOVEMENT, movement})
    for(let i = 0; i < movement; i++){
        dispatch({type: MOVE_ONE, id})
        await sleep(1)
    }

}

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
