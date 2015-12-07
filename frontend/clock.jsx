var React = require('react');

var Clock = React.createClass({
  render: function() {
    return (
      <div>{this.props.currentTime.toString()}</div>
    );
  }
});

module.exports = Clock;
