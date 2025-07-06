const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");
const postcss = require("rollup-plugin-postcss");
const peerDepsExternal = require("rollup-plugin-peer-deps-external");
const { terser } = require("rollup-plugin-terser");
const dts = require("rollup-plugin-dts").default;
const preserveDirectives = require("rollup-preserve-directives").default;
const pkg = require("./package.json");

module.exports = [
  // Main JS and CSS bundling configuration
  {
    input: "src/main.ts",
    output: [
      {
        dir: "dist",
        format: "esm",
        sourcemap: true,
        preserveModules: true, // Preserves the module structure in the output
      },
    ],
    plugins: [
      peerDepsExternal(), // automatically peer dependencies listed in package.json
      resolve(), // allows rollup to find and bundle dependencies from node_modules
      commonjs(), // converts commonJs modules to ES6 so that they can be included in rollup bundle
      typescript({ tsconfig: "./tsconfig.json" }), // integrates typescript compilation into rollup
      postcss({
        extract: "styles.css", // lub true dla domyślnego
        minimize: true,
        sourceMap: true,
        plugins: [tailwindcss()],
      }),
      preserveDirectives(), // Preserves directives in the source code, useful for keeping comments and other directives intact
      terser(), // minifies the final js bundle to reduce its size
    ],
    external: ["react", "react-dom"],
  },
  // TypeScript declarations bundling configuration
  {
    input: "dist/types/main.d.ts", // The entry point for the types
    output: [{ file: "dist/types/main.d.ts", format: "es" }], // Output bundled d.ts file
    plugins: [dts()], // bundles typescript declaration files (.d.ts) into a single file
  },
];