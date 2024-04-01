// Utility functions for UnicodePlugin

function escapeNonUnicodeCharacters(str) {
    return str.split('').map(function(char) {
      var charCode = char.charCodeAt(0);
      if (charCode > 127) {
        return '\\u' + ('0000' + charCode.toString(16)).slice(-4);
      }
      return char;
    }).join('');
  }
  
  function shouldProcessFile(filename) {
    return /\.js$/.test(filename); // Adjust the regex to match file types you wish to process
  }
  
  module.exports = {
    escapeNonUnicodeCharacters,
    shouldProcessFile,
  };
  