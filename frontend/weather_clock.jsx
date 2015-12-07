var React = require('react'),
    Weather = require('./weather.jsx'),
    Clock = require('./clock.jsx');

var WeatherClock = React.createClass ({
  getInitialState: function(){
    return {currentTime: new Date(), currentLocation: {}};
  },
  getLocation: function() {
    var success = function(position) {
      this.setState({currentLocation: {latitude: position.coords.latitude,
          longitude: position.coords.longitude}});
    }.bind(this);
    this.watchId = navigator.geolocation.getCurrentPosition(success);
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
        <Weather currentLocation={this.state.currentLocation}/>
      </figure>
    );
  }
});

module.exports = WeatherClock;
