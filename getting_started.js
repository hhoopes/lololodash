// include the Lo-Dash library
    var _ = require("lodash");

    // var worker = function(list) {
    //     return _.filter(list, {active: true})
    // };

    var filter = function(list) {
        return _.filter(list, {active: true})
    };

    // export the worker function as a nodejs module
    module.exports = filter;
