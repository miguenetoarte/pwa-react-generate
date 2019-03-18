import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionAuth from '../../../store/auth/actions';

class FormLogin extends React.Component {

    render() {
        return (
            <div>
                <h1>Login</h1>
                <p>Login component: <small style={{color: 'blue'}}>src/containers/login/form/FormLogin.js</small></p>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    ...actionAuth
}, dispatch)

export default connect(null, mapDispatchToProps)(FormLogin);