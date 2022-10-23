declare module '*.scss' {
    type CssModule = Record<string, string>;
    const styles: CssModule;
    export default styles;
}