"use strict";

var React = require('react');

var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var Route = Router.Route;

var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/homePage')}></DefaultRoute>
        <NotFoundRoute handler={require('./components/notFoundPage')}></NotFoundRoute>
        <Redirect from="awthurs" to="authors" />
        <Route name="authors" handler={require('./components/authors/authorPage')} />
        <Route name="addAuthor" path="author" handler={require('./components/authors/ManageAuthorPage')} />
        <Route name="manageAuthor" path="author/:id" handler={require('./components/authors/ManageAuthorPage')} />
        <Route name="about" handler={require('./components/about/aboutPage')} />
    </Route>
    );

module.exports = routes;