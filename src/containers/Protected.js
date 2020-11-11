import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Protected extends React.Component {
    render() {
        const Component = this.props.component;
       
        return this.props.userInfo !== null ? (
            <Component />
        ) : (
            <Redirect to={{ pathname: '/signup' }} />
        );
    }
}

const mapStateToProps = state => ({
    user: state.lobbyReducer.userInfo,
});


export default connect(mapStateToProps)(Protected);