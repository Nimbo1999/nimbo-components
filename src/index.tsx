import { StrictMode } from 'react';
import ReactDom from 'react-dom';
import App from './App';

import { Text } from './components/typografy';

import './assets/css/main.less';

if (process.env.NODE_ENV === 'development') {
    ReactDom.render(
        <StrictMode>
            <App />
        </StrictMode>,
        document.getElementById('root')
    );
}

export { Text }
