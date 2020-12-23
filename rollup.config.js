import postcss from 'rollup-plugin-postcss';
import babel from 'rollup-plugin-babel';
// import { uglify } from 'rollup-plugin-uglify';
import metablock from 'rollup-plugin-userscript-metablock';

const config = {
    postcss: {
        minimize: true,
        extensions: ['.css'],
    },
    babel: {
        exclude: ['node_modules/**'],
        presets: [
            [
                '@babel/env', {
                    modules: false,
                    targets: 'last 2 versions, ie >= 10'
                }
            ]
        ]
    },

}

export default [{
    input: "./src/index.js",
    output: {
        file: "./dist/site-director.js",
        format: "iife",
        name: 'SiteDirector'
    },
    plugins: [
        postcss(config.postcss),
        babel(config.babel),
        // uglify(),
        metablock({
            file: './src/meta.json'
        })
    ]
}];

// https://segmentfault.com/a/1190000010628352
