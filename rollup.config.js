const commonjs = require('@rollup/plugin-commonjs');
const resolve = require('@rollup/plugin-node-resolve');
const { terser } = require('rollup-plugin-terser');
const typescript = require('rollup-plugin-typescript2');
const dts = require('rollup-plugin-dts');

module.exports = [
  {
    input: 'src/main.ts',
    output: [
      {
        file: 'dist/bundle.cjs',
        format: 'cjs',
      },
      {
        file: 'dist/bundle.mjs',
        format: 'esm',
      },
      {
        file: 'dist/bundle.min.js',
        format: 'iife',
        name: 'version',
        plugins: [ terser() ],
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript(),
    ],
  },
  {
    input: './src/index.d.ts',
    output: [{file: 'dist/index.d.ts', format: 'es'}],
    plugin: [
      dts.default(),
    ],
  },
];
