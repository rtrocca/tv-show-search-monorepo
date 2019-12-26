const postcss = require('rollup-plugin-postcss');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        plugins: [],
        extensions: ['.css', '.scss'],
        inject: false,
        // only write out CSS for the first bundle (avoids pointless extra files):
        extract: "./dist/show-card.css"//!!options.writeMeta,
      })
    );
    return config;
  },
};