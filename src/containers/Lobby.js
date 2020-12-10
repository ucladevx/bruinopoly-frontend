import {connect} from 'react-redux';
import {
    getRooms, 
    createRoom
    } from '../reducers/lobby';
import Lobby from '../components/Lobby';

// import {withRouter} from 'react-router-dom';

const mapStateToProps = state => ({
    rooms: state.lobbyReducer.rooms
});

const mapDispatchToProps = dispatch => ({
    getRooms: () => {
        dispatch(getRooms());
    },
    createRoom: (data) => {
        dispatch(createRoom(data));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Lobby);