const React = require('react');

module.exports = React.createClass({
  render() {
    const bench = this.props.bench;
    return (
      <div>
        {bench.description}
      </div>
    );
  }
});
