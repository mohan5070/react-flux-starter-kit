"use strict";

var React = require('react');

var Header = React.createClass({
    render: function() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand" href="#">Navbar</a>
                    <ul className="nav navbar-nav">
                        <li><a className="nav-item nav-link active" href="#home">Home <span className="sr-only">(current)</span></a></li>
                        <li><a className="nav-item nav-link" href="#authors">Authors</a></li>
                        <li><a className="nav-item nav-link" href="#about">About</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;