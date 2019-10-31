import React from 'react';
import {connect} from 'react-redux';

class Profile extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>{this.props.user && this.props.user.username}</div>
        )
    }
}

function mapReduxStateToProps(reduxState) {
    return reduxState;
}



export default connect(mapReduxStateToProps)(Profile);