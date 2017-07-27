"use strict";

var React = require('react');
var Link = require('react-router').Link;

var Header = React.createClass({
    render: function() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <Link to="app" className="navbar-brand" href="#">
                        <img src="images/logo1.png" height="25px"/>
                    </Link>
                    <ul className="nav navbar-nav">
                        <li><Link to="app">Home</Link></li>
                        <li><Link to="authors">Authors</Link></li>
                        <li><Link to="about">About</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;