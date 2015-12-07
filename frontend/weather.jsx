var React = require('react');

var Weather = React.createClass({
  render: function() {
    return (
      <div>
        <h3>Temperature</h3>
        {this.props.currentCity.toString()}
        <br></br>
        {this.props.currentWeather.toString()}
        <br></br>
        {this.props.currentTemp.toString()}
        <br></br>
      </div>
    );
  }
});

module.exports = Weather;
