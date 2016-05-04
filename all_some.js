// include the Lo-Dash library
    var _ = require("lodash");

    var temps = function(cities) {
      var results = {
        hot: [],
        warm: []
      };

      var isHot = function(days){
        return _.every(days, function(day){
          return day > 19;
        })
      }

      var isWarm = function(days){
        return _.some(days, function(day){
          return day > 19;
        })
      }
       _.forEach(cities, function (temps, city){
        if (isHot(temps)){
          results.hot.push(city);
        } else if (isWarm(temps)){
          results.warm.push(city);
        }

       })

      return results
    };

    // export the worker function as a nodejs module
    module.exports = temps;
