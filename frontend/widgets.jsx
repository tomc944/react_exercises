var React = require('react'),
    ReactDOM = require('react-dom'),
    Autocomplete = require('./autocomplete.jsx'),
    WeatherClock = require('./weather_clock.jsx');


document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<WeatherClock/>,
    document.getElementById('main'));
});

//<Autocomplete names={['cat', 'chard', 'cantalope', 'call']}/>
