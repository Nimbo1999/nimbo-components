import { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './Theme';

const NimboProvider: FC = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default NimboProvider;
