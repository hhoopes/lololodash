// include the Lo-Dash library
    var _ = require("lodash");

    // var worker = function(list) {
    //     return _.filter(list, {active: true})
    // };

    var sort = function(list) {
        return _.sortBy(list, function (item){
        return -item.quantity;
      })
    };

    // export the worker function as a nodejs module
    module.exports = sort;
