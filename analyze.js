// include the Lo-Dash library
    var _ = require("lodash");

    var analysis = function(people) {
      var total = _.reduce(people, function(sum, person){
          return sum + person.income;
        }, 0)

      var avg = total/_.size(people);

      sorted = _.sortBy(people, "income")

      var stats = {
        average: avg,
        underperform:
          _.filter(sorted, function(person){
            return person.income <= avg;
          }),
        overperform:
          _.filter(sorted, function(person){
            return person.income > avg;
          })
        }
      return stats;
    }

    // export the worker function as a nodejs module
    module.exports = analysis;
