import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import visualizer from 'rollup-plugin-visualizer';
import { terser } from 'rollup-plugin-terser';
import less from 'rollup-plugin-less';
import lessModules from 'rollup-plugin-less-modules';

// const extensions = ['.js', '.ts', '.jsx', '.tsx'];

export default {
    input: [
        './src/index.tsx',
    ],
    output: {
        dir: 'dist',
        format: 'esm',
        preserveModules: true,
        preserveModulesRoot: 'src',
        sourcemap: true
    },
    plugins: [
        resolve(),
        commonjs(),
        less(),
        lessModules({
            output: 'dist/assets/css'
        }),
        typescript({
            tsconfig: './tsconfig.json',
            declaration: true,
            declarationDir: 'dist',
        }),
        terser(),
        visualizer({
            filename: 'bundle-analysis.html',
            open: true,
        }),
    ],
    external: ['react', 'react-dom'],
}
