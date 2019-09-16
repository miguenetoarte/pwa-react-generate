import React from 'react';
import * as routers from "../constants/routers";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { HeaderContent, FooterContent } from "../common";
import { 
    Login, 
    Logout
} from "./";

const Routers = () => (
        <Router key={Math.random()}>
            <HeaderContent/>
                <Route exact path={routers.ROOT} component={Login}/>
                <PrivateRoute path={routers.LOGOUT} component={Logout} />
            <FooterContent/>
        </Router>
)

export default Routers;