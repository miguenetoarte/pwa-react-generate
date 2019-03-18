import React from 'react'
import ContentUnlogged from "../../common/contentUnlogged/ContentUnlogged";
import HeaderUnlogged from "../../common/header/headerUnlogged/HeaderUnlogged";

const Logout = () => (
    <ContentUnlogged>
        <HeaderUnlogged/>
        <div>
            <h1>Logout</h1>
            <p>Logout component: <small style={{color: 'blue'}}>src/containers/logout/Logout.js</small></p>
        </div>
    </ContentUnlogged>
);

export default Logout
