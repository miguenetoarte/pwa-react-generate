import React, { Fragment} from 'react';
import '../assets/css/App.css';
import {createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
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

const Theme = (props) => (
    <Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
        {props.children}
        </MuiThemeProvider>
    </Fragment>
)

export default Theme;