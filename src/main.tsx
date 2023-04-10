import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {CssBaseline} from "@mui/material";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./app/store";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <CssBaseline/>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
)
