import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        pallet: {
            white:  string,
            black:  string,
        },

        breakPoints: {
            md: string,
            lg: string
        },

        spacing: Function,
    }
}