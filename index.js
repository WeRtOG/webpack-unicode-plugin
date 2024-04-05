const { escapeNonUnicodeCharacters, shouldProcessFile } = require("./utils");
const { Compilation } = require("webpack");

class UnicodePlugin {
  apply(compiler) {
    // Utilizing the 'processAssets' hook with an appropriate stage
    compiler.hooks.compilation.tap("UnicodePlugin", (compilation) => {
      compilation.hooks.processAssets.tapAsync(
        {
          name: "UnicodePlugin",
          // Specify the stage to ensure your plugin runs at the correct time
          // Adjust the stage based on when you want your plugin to run
          stage: Compilation.PROCESS_ASSETS_STAGE_SUMMARIZE,
        },
        (assets, callback) => {
          // Iterate over all the assets
          Object.keys(assets).forEach((filename) => {
            if (shouldProcessFile(filename)) {
              let source = assets[filename].source();
              if (typeof source === "string") {
                source = escapeNonUnicodeCharacters(source);

                // Update the asset
                assets[filename] = {
                  source: () => source,
                  size: () => source.length,
                };
              }
            }
          });
          callback();
        }
      );
    });
  }
}

module.exports = UnicodePlugin;
