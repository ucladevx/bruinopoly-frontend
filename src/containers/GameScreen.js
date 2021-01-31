import {connect} from 'react-redux';
import {requestStart} from '../reducers/lobby'
import GameScreen from '../components/GameScreen';

// import {withRouter} from 'react-router-dom';

const mapStateToProps = state => ({
    players: state.lobbyReducer.players,
    start: state.lobbyReducer.gameStart,
    user: state.lobbyReducer.userInfo,
    game: state.lobbyReducer.game,
    host: state.lobbyReducer.isHost
});

const mapDispatchToProps = dispatch => ({
    requestStart: () => {
        dispatch(requestStart())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);