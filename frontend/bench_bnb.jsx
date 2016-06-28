const React = require('react');
const ReactDOM = require('react-dom');
const reactRouter = require('react-router');
const Router = reactRouter.Router;
const Route = reactRouter.Route;
const hashHistory = reactRouter.hashHistory;

const Search = require('./components/search');

const routes = (
  <Route path='/' component={Search} />
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router history={hashHistory}>{routes}</Router>,
    document.getElementById('content')
  );
});
