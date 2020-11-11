import {connect} from 'react-redux';
import {getRooms} from '../reducers/lobby';
import Lobby from '../components/Lobby';

// import {withRouter} from 'react-router-dom';

const mapStateToProps = state => ({
    rooms: state.lobbyReducer.rooms
});

const mapDispatchToProps = dispatch => ({
    getRooms: () => {
        dispatch(getRooms());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Lobby);