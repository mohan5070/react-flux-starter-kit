"use strict";

var React = require('react');

var Home = React.createClass({
   render: function() {
       return (
         <div className="jumbotron">
            <h1>Admin</h1>
             <p>React router, flux, for web apps</p>
         </div>
       );
   }
});

module.exports = Home;