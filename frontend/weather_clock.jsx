var React = require('react'),
    Weather = require('./weather.jsx'),
    Clock = require('./clock.jsx');

var WeatherClock = React.createClass ({
  // store as little as possible in state
  // just store data; parse information as needed
  getInitialState: function(){
    return {currentTime: new Date(),
      currentLocation: {},
      currentCity: "",
      currentTemp: "",
      currentWeather: ""};
  },
  getLocation: function() {
    var success = function(position) {
      this.setState({currentLocation: {latitude: position.coords.latitude,
          longitude: position.coords.longitude}});
      this.getWeather();
    }.bind(this);
    this.watchId = navigator.geolocation.getCurrentPosition(success);
  },
  getWeather: function() {
    var lat = this.state.currentLocation.latitude;
    var lon = this.state.currentLocation.longitude;
    var apikey = "645c5d39c7603f17e23fcaffcea1a3c1";
    var url = "http://api.openweathermap.org/data/2.5/weather?lat="
      + lat + "&lon=" + lon + "&APPID=" + apikey;

    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.responseText);
        var tempC = data.main.temp - 273.15;
        var tempF = Math.floor(tempC * (9/5) + 32);
        this.setState({currentTemp: tempF,
          currentWeather: data.weather[0].main,
          currentCity: data.name});
      } else {
        // we don't make errors ever
      }
    }.bind(this);
    request.send();
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
    this.getLocation();
  },
  tick: function() {
    var currentSeconds = this.state.currentTime.getSeconds();
    var newTime = this.state.currentTime.setSeconds(currentSeconds + 1);
    this.setState({currentTime: new Date(newTime)});
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
    this.interval = 0;

    navigator.geolocation.clearWatch(this.watchId);
  },
  render: function() {
    return (
      <figure>
        <Clock currentTime={this.state.currentTime}/>
        <Weather
          currentWeather={this.state.currentWeather}
          currentTemp={this.state.currentTemp}
          currentCity={this.state.currentCity}/>
      </figure>
    );
  }
});

module.exports = WeatherClock;
