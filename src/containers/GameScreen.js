import {connect} from 'react-redux';
import GameScreen from '../components/GameScreen';

// import {withRouter} from 'react-router-dom';

const mapStateToProps = state => ({
    players: state.lobbyReducer.players,
    game: state.lobbyReducer.game,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);