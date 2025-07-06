const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");
const postcss = require("rollup-plugin-postcss");
const peerDepsExternal = require("rollup-plugin-peer-deps-external");
const terser  = require("@rollup/plugin-terser").default;
const preserveDirectives = require("rollup-preserve-directives").default;
const dts = require("rollup-plugin-dts").default;

module.exports = [
  // Main JS and CSS bundling configuration
  {
    input: "src/main.ts",
    output: [
      {
        file: "dist/index.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(), // automatically peer dependencies listed in package.json
      resolve(), // allows rollup to find and bundle dependencies from node_modules
      commonjs(), // converts commonJs modules to ES6 so that they can be included in rollup bundle
      typescript({ tsconfig: "./tsconfig.json" }), // integrates typescript compilation into rollup
      postcss({
        extract: true, // lub true dla domyślnego
        minimize: true,
        sourceMap: true,
      }),
      preserveDirectives(), // Preserves directives in the source code, useful for keeping comments and other directives intact
      terser(), // minifies the final js bundle to reduce its size
    ],
    external: ["react", "react-dom"],
  },
];