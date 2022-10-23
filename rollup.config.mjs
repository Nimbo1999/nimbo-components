/**
 * @type {import('rollup').RollupOptions}
 */
 const cjsConfig = {
    input: './src/index.ts',
    output: {
        file: 'dist/cjs/index.js',
        format: 'cjs'
    }
}

/**
 * @type {import('rollup').RollupOptions}
 */
const esmConfig = {
    input: './src/index.ts',
    output: {
        file: 'dist/esm/index.js',
        format: 'esm'
    }
}

const rollupConfig = [
    cjsConfig,
    esmConfig
]

export default rollupConfig;
