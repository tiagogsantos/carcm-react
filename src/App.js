import React from 'react';
import {createTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from "./routes";

const theme = createTheme({
    palette: {
        primary: {
            main: '#4791db',
        }
    },
    props: {
        MuiTextField: {
            variant: 'outlined',
            fullWidth: true
        },
        MuiSelect: {
            variant: 'outlined',
            fullWidth: true
        }
    }
});

const App = () => (
    <ThemeProvider theme={theme}>
        <div className="container-fluid mt-5">
            <Routes/>
        </div>
    </ThemeProvider>
);

export default App;