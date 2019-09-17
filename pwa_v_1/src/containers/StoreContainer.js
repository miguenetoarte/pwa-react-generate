import React from 'react';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {persistor, state} from '../store/store';

const StoreContainer = ({ children }) => (
    <Provider store={state}>
        <PersistGate loading={null} persistor={persistor}>
            {children}
        </PersistGate>
    </Provider>)

export default StoreContainer;