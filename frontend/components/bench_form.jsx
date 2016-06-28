const React = require('react');

const BenchForm = React.createClass({
  getInitialState() {
    return {
      description: "",
      picture_url: "",
      seating: 2
    };
  },
  navigateToSearch() {
    hashHistory.push("/");
  },
  handleCancel(event) {
    event.preventDefault();
    this.navigateToSearch();
  },
  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  },
  render() {
    return (
        <div className="new-bench-container">
          <div className="new-bench-form">
            <h3 className="new-bench-title">Create A Bench!</h3>
            <form>
              <label className="bench-field">Description</label>
              <input type="text" value={this.state.description}
              onChange={this.update('description')} className="bench-field"/>

              <label className="bench-field">Image URL</label>
              <input type="text" value={this.state.picture_url}
              onChange={this.update('picture_url')} className="bench-field"/>

              <label className="bench-field">Number of Seats</label>
              <input min='0' type="number" value={this.state.seating}
              onChange={this.update('seating')} className="bench-field"/>

              <label className="bench-field">Latitude</label>
              <input type="text" disabled className="bench-field"/>

              <label className="bench-field">Longitude</label>
              <input type="text" disabled className="bench-field"/>

              <div className="button-holder">
                <input type="submit" value="Create Bench" className="new-bench-button"/>
              </div>
            </form>
            <div className="button-holder">
              <button onClick={this.handleCancel} className="new-bench-button">Cancel</button>
            </div>
          </div>
        </div>
    );
  }
});

module.exports = BenchForm;
