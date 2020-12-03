import {connect} from 'react-redux';
import GameScreen from '../components/GameScreen';

// import {withRouter} from 'react-router-dom';

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);