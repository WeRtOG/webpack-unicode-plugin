const { escapeNonUnicodeCharacters, shouldProcessFile } = require("./utils");

class UnicodePlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync("UnicodePlugin", (compilation, callback) => {
      Object.keys(compilation.assets).forEach((filename) => {
        let source = compilation.assets[filename].source();

        if (shouldProcessFile(filename)) {
          source = escapeNonUnicodeCharacters(source);

          compilation.assets[filename] = {
            source: () => source,
            size: () => source.length,
          };
        }
      });
      callback();
    });
  }
}

module.exports = UnicodePlugin;
