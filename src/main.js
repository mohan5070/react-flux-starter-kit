"use strict";
var React = require('react');
var Router = require('react-router');
var routes = require('./routes');


Router.run(routes, function(Handler) {
    React.render(<Handler/>, document.getElementById('app'));
});

// (function(win) {
//     "use strict";


//     // function render() {
//     //     var route = win.location.hash.substr(1);
//     //     React.render(<App route={route} />, document.getElementById('app'));
//     // }

//     // win.addEventListener('hashchange', render);
//     // render();

// })(window);

