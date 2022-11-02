import { defineConfig } from 'rollup';
import styles from "rollup-plugin-styles";
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';


const rollupWatch = process.env.ROLLUP_WATCH;

export default defineConfig({
   input: "src/main.js",
   output: {
      file: "dist/main.js",
      format: "iife",
      assetFileNames: "[name][extname]",
      sourcemap: true
   },
   plugins: [
      alias({
         entries: [
            { find: 'react', replacement: 'preact/compat' },
            { find: 'react-dom/test-utils', replacement: 'preact/test-utils' },
            { find: 'react-dom', replacement: 'preact/compat' },
            { find: 'react/jsx-runtime', replacement: 'preact/jsx-runtime' }
         ]
      }),
      resolve({ browser: true }),
      commonjs(),
      babel({
         babelHelpers: 'bundled',
         exclude: 'node_modules/**'
      }),
      styles({ mode: ['extract', 'styles.css'] }),
      image(),
      serve(), 
      rollupWatch ? livereload({watch: "dist", verbose: true}) : null
   ]
})