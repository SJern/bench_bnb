const React = require('react');
const ReactDOM = require('react-dom');
const reactRouter = require('react-router');
const Router = reactRouter.Router;
const Route = reactRouter.Route;
const hashHistory = reactRouter.hashHistory;

const BenchStore = require('./stores/bench_store');

const routes = (
  <p></p>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <p>"Hi Benches~"</p>,
    document.getElementById('content')
  );
});
