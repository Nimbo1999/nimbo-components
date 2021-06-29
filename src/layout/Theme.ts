import { DefaultTheme } from 'styled-components';

const BASE_UNIT = 0.5;

const theme:DefaultTheme = {
    pallet: {
        white: '#ffffff',
        black: '#000000',
    },

    breakPoints: {
        md: '768px',
        lg: '992px',
    },

    spacing: (value: number) => `${ BASE_UNIT * value }em`,
}

const useTheme = () => theme;

export { theme as default, useTheme };
