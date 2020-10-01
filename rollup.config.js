import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';
import { uglify } from "rollup-plugin-uglify";
import babel from 'rollup-plugin-babel';

export default [
	{
		input: 'index.js',
		output: {
			name: 'generatePlaceholder',
			file: pkg.unpkg,
			format: 'umd'
		},
		plugins: [
      resolve(),
      babel({
        babelrc: false,
        presets: [
          ['env', { modules: false }],
        ],
        plugins: ['babel-plugin-transform-object-rest-spread']
      }),
      commonjs(),
      uglify()
		]
	},
	{
		input: 'index.js',
		external: ['element-to-path'],
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
		]
	}
];
