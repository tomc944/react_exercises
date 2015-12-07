var React = require('react');

var Clock = React.createClass({
  render: function() {
    return (
      <div>
        <h3>Clock</h3>
        {this.props.currentTime.toString()}</div>
    );
  }
});

module.exports = Clock;
