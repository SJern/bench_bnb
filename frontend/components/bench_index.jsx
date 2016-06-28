const React = require('react');
const BenchStore = require('../stores/bench_store');
const BenchActions = require('../actions/bench_actions');
const BenchIndexItem = require('./index_item');

const BenchIndex = React.createClass({
  getInitialState() {
    return { benches: BenchStore.all() };
  },
  componentDidMount() {
    this.benchListener = BenchStore.addListener(this._handleChange);
  },
  _handleChange() {
    this.setState({ benches: BenchStore.all() });
  },
  render() {
    return (
      <div>
        {Object.keys(this.state.benches).map(id => {
          return <BenchIndexItem bench={this.state.benches[id]} key={id} />;
        })}
      </div>
    );
  }
});

module.exports = BenchIndex;
