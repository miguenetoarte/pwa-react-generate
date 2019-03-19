import React from 'react';
import '../assets/scss/normalize.scss';
import '../assets/scss/materialize-icon.scss';
import '../assets/scss/App.scss';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
const theme = createMuiTheme({
    palette: {
        typography: {
            useNextVariants: true,
        },
        primary: {
            light: '#ff7961',
            main: '#ba000d',
            dark: '#ba000d',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});

const Template = (props) => (<MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>)

export default Template;