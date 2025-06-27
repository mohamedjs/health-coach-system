// Polyfill for createReactContext in React 18
const React = require('react');

// Add createReactContext as an alias to createContext for backward compatibility
if (typeof React.createReactContext === 'undefined') {
  React.createReactContext = React.createContext;
}

// Export all React exports
module.exports = React;

// Also provide as default export
module.exports.default = React;
