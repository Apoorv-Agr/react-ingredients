var React = require('react');
var createReactClass = require('create-react-class');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');
ReactDOM.render(<ListManager title="Ingredients" />, document.getElementById('ingredients'));
