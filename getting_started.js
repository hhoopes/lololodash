// include the Lo-Dash library
    var _ = require("lodash");

    var filter = function(list) {
        return _.filter(list, {active: true})
    };

    // export the worker function as a nodejs module
    module.exports = filter;
