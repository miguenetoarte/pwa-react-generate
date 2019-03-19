import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Routers from "./containers/Routers";
import Template from "./containers/Template";
import StoreContainer from "./containers/StoreContainer";

ReactDOM.render(
    <Template>
       <StoreContainer>
            <Routers/>
        </StoreContainer>
    </Template>,
    document.getElementById('root'));
registerServiceWorker();
