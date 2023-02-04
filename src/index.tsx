import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./Components/App";
import {Provider} from "react-redux";
import {GlobalStore} from "./Redux/store/store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


const store = GlobalStore ()
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);

