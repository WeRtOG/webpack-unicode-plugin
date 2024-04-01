# webpack-unicode-plugin 🌍✨

The `webpack-unicode-plugin` helps ensure your JavaScript files maintain proper Unicode encoding when bundled with Webpack. This is especially useful in scenarios where character encoding might get mixed up during the build process, leading to unexpected characters in your output files.

## Problem it Solves

Often during the webpack bundling process, non-ASCII characters can end up misrepresented in the final output due to encoding issues. This plugin converts all non-ASCII characters to Unicode escape sequences, ensuring your JavaScript files look and function as expected across all environments.

## Usage

1. Install the plugin via npm:

```bash
npm install webpack-unicode-plugin --save-dev
