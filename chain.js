// include the Lo-Dash library
    var _ = require("lodash");

    var words = function(list) {
      return _.chain(list)
        .map(function(word){
          var chains = word + 'chained';
          return chains.toUpperCase();
        })
        .sortBy();

    }

    // export the worker function as a nodejs module
    module.exports = words;
