// include the Lo-Dash library
    var _ = require("lodash");

    var each = function(list) {
        return _.forEach(list, function (item){
        if (item.population > 1){
          item.size = "big"
        } else if (item.population < 1 && item.population > 0.5){
          item.size = "med"
        } else if (item.population < 0.5){
          item.size = "small"
        }
      })
    };

    // export the worker function as a nodejs module
    module.exports = each;
