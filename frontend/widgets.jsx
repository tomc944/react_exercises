var React = require('react'),
    ReactDOM = require('react-dom'),
    Autocomplete = require('./autocomplete.jsx');


document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Autocomplete names={['cat', 'chard', 'cantalope', 'call']}/>,
    document.getElementById('main'));
});
