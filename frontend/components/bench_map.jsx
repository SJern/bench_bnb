const React = require('react');
const ReactDOM = require('react-dom');
const BenchStore = require('../stores/bench_store');
const BenchActions = require('../actions/bench_actions');

const _getCoordsObj = function(latLng) {
  return ({
    lat: latLng.lat(),
    lng: latLng.lng()
  });
};

const BenchMap = React.createClass({
  componentDidMount(){
    let that = this;
    this.markers = [];
    this.benchListener = BenchStore.addListener(this._handleChange);
    const mapDOMNode = ReactDOM.findDOMNode(this.refs.map);
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.map.addListener('idle', () => {
      const mapBounds = that.map.getBounds();
      const northEast = _getCoordsObj(mapBounds.getNorthEast());
      const southWest = _getCoordsObj(mapBounds.getSouthWest());
      const bounds = { northEast, southWest };
      BenchActions.fetchAllBenches(bounds);
    });
  },
  _handleChange() {
    this.benchesToAdd().forEach(this.createMarkerFromBench);
    this.markersToRemove().forEach(this.removeMarker);
  },
  benchesToAdd(){
    const currentBenchIds = this.markers.map( marker => marker.benchId );
    const newBenches = BenchStore.all();
    const newBenchIds = Object.keys(newBenches);
    let to_add = newBenchIds.reduce( (collection, benchId) => {
      if (!currentBenchIds.includes(parseInt(benchId))) {
        return ( collection.concat( [newBenches[benchId]] ));
      } else {
        return collection;
      }
    }, [] );
    return to_add;
  },
  createMarkerFromBench(bench) {
    const pos = new google.maps.LatLng(bench.lat, bench.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      benchId: bench.id
    });

    this.markers.push(marker);
  },
  markersToRemove(){
    return this.markers.filter( marker => {
      return !BenchStore.all().hasOwnProperty(marker.benchId);
    });
  },
  removeMarker(marker) {
    const idx = this.markers.indexOf( marker );
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  },
  render() {
    return (
      <div className='map' ref='map'>
      </div>
    );
  }
});

module.exports = BenchMap;
