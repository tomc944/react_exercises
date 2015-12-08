var React = require('react'),
    ReactDOM = require('react-dom'),
    Autocomplete = require('./autocomplete.jsx'),
    WeatherClock = require('./weather_clock.jsx'),
    Tabs = require('./tabs.jsx');

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<div><Autocomplete names=
    {['cat', 'call', 'puppy', 'dingus', "tofu", 'thomas', 'sunny']}/>
    <WeatherClock/>
    <Tabs allTabs = {[{title: "Whatever", content: "Still whatever"},
                     {title: "Demo Tab", content: "Body of tab"},
                     {title: "Gizmo", content: "Ned loves cats"},
                     {title: "Winnie's dogs", content: "Sunny & Tofu"}]}/>
    </div>,
    document.getElementById('main'));
});
