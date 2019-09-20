import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Theme from "./components/Theme";
import StoreContainer from "./components/StoreContainer";
import App from "./components/App";

ReactDOM.render(
    <Theme>
       <StoreContainer>
            <App/>
        </StoreContainer>
    </Theme>,
    document.getElementById('root'));
registerServiceWorker();
