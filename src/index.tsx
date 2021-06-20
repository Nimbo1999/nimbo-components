import React, { FC, StrictMode } from 'react';
import ReactDom from 'react-dom';

const App: FC = () => <span>Hello world</span>;

ReactDom.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById('root')
);
