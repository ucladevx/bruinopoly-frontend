import {connect} from 'react-redux';
import Board from '../components/Board/Board';

// import {withRouter} from 'react-router-dom';

const mapStateToProps = state => ({
    turn: state.lobbyReducer.yourTurn
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);