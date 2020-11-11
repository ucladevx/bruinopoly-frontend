import {connect} from 'react-redux';
import {setUserInfo} from '../reducers/lobby';
import Signup from '../components/Signup';

// import {withRouter} from 'react-router-dom';

const mapStateToProps = state => ({
    redirect: state.lobbyReducer.redirectTo
});

const mapDispatchToProps = dispatch => ({
    signup: (obj) => {
        dispatch(setUserInfo(obj));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);