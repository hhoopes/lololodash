// include the Lo-Dash library
    var _ = require("lodash");

    var reduced = function(list) {
      var summed = []

      var grouped = _.groupBy(list, "article");

      _.forEach(grouped, function(items, article_no){
        summed.push({
          article: parseInt(article_no),
          total_orders: _.reduce(items, function(sum, item){
            return sum + item.quantity;
          }, 0)
        })
      })
      return summed.reverse()
    }

    // export the worker function as a nodejs module
    module.exports = reduced;
