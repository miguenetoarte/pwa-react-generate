import React from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import FormLogin from "./form/LoginForm";
import { NavigationKeeper } from "../../navigation";
import * as uiActions from "../../../store/ui/navigation/actions";
import * as routers from "../../../constants/routers";
import * as selectorsAuth from "../../../store/auth/reducer";

const Login = () => (
    <NavigationKeeper routerToKeep={routers.ROOT} objectToKeep={selectorsAuth}>
        <FormLogin/>
    </NavigationKeeper>
);

const mapStateToProps = state => ({
    authToKeep: selectorsAuth.getAuth(state),
})

const mapDispatchToProps = dispatch => bindActionCreators({
    ...uiActions
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login);
