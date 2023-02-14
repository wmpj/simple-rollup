const commonjs = require('@rollup/plugin-commonjs');
const resolve = require('@rollup/plugin-node-resolve');
const { terser } = require('rollup-plugin-terser');

module.exports = {
  input: "src/main.js",
  output: [
    {
      file: "dist/bundle.cjs",
      format: "cjs",
    },
    {
      file: "dist/bundle.mjs",
      format: "esm",
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
  ]
};
