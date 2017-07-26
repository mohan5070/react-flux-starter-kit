"use strict";

var React = require('react');

var About = React.createClass({
    statics: {
        willTransitionTo: function(transition, params, query, callback) {
            if(!confirm('are you sure?')){
                transition.about();
            }else {
                callback();
            }
        },
        willTransitionFrom: function(transition, component) {
            if(!confirm('are you sure want to quit?')){
                transition.about();
            }
        }
    },
    render: function() {
        return (
            <div>
                <h1>About</h1>
                <p>This is my application</p>
                <ul>
                <li>React1</li>
                <li>React2</li>
                <li>React3</li>
                <li>React4</li>
                </ul>
            </div>
        );
    }
});

module.exports = About;