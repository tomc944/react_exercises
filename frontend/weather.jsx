var React = require('react');

var Weather = React.createClass({
  render: function() {
    return (
      <div>{this.props.currentLocation.longitude}</div>
    );
  }
});

module.exports = Weather;
