import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Theme from "./containers/Theme";
import StoreContainer from "./containers/StoreContainer";
import App from "./containers/App";

ReactDOM.render(
    <Theme>
       <StoreContainer>
            <App/>
        </StoreContainer>
    </Theme>,
    document.getElementById('root'));
registerServiceWorker();
