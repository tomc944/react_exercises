var React = require('react');

var Autocomplete = React.createClass ({
  getInitialState: function(){
    return {input: ""};
  },
  updateInput: function(e) {
    // debugger
    this.setState({input: e.target.value});
  },
  findMatches: function(name) {
    var regex = new RegExp(this.state.input + "+");
    if (name.match(regex)) {
      return name;
    }
  },
  updateOutput: function () {
    if (this.state.input !== "") {
      return this.props.names.filter(this.findMatches);
    } else {
      return [];
    }
  },
  render: function() {
    return(
      <aside>
        <input type="text" id="input" onChange={this.updateInput} />
        <ul>
          {
            this.updateOutput().map(function(match, i) {
              return <li key={i}>{match}</li>;
            })
          }
        </ul>
      </aside>
    );
  }
});

module.exports = Autocomplete;
