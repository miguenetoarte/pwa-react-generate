import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionAuth from '../../../store/auth/actions';
import * as uiActions from "../../../store/ui/actions";
import * as uiSelectors from "../../../store/ui/reducer";
import * as routers from "../../../constants/routers";
import {withRouter} from "react-router-dom";

class FormLogin extends React.Component {

    constructor() {
        super();
        this.state = {
            username: 'miguelnetoarte@gmail.com',
            password: '',
            device: ''
        };
    }

    componentDidMount() {
        this.props.setNavigation(routers.ROOT, this.state);
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Login</h1>
                <p>Login component: <small style={{color: 'blue'}}>src/containers/login/form/FormLogin.js</small></p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ui: uiSelectors.getUi(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    ...actionAuth,
    ...uiActions,
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FormLogin));