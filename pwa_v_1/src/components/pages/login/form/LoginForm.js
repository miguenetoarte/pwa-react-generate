import React from 'react';
import {connect} from 'react-redux';
import * as selectorsAuth from "../../../../store/auth/reducer";
import {withRouter} from "react-router-dom";

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = props.auth;
    }

    componentDidMount() {
        console.log(this.props.auth);
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: selectorsAuth.getAuth(state),
})

export default withRouter(connect(mapStateToProps, null)(LoginForm));