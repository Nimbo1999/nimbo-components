import { StrictMode } from 'react';
import ReactDom from 'react-dom';
import App from './App';

import './assets/css/main.less';

if (process.env.NODE_ENV === 'development') {
    ReactDom.render(
        <StrictMode>
            <App />
        </StrictMode>,
        document.getElementById('root')
    );
}
