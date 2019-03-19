import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Routers from "./containers/Routers";
import Theme from "./containers/Theme";
import StoreContainer from "./containers/StoreContainer";

ReactDOM.render(
    <Theme>
       <StoreContainer>
            <Routers/>
        </StoreContainer>
    </Theme>,
    document.getElementById('root'));
registerServiceWorker();
