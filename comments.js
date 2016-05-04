// include the Lo-Dash library
    var _ = require("lodash");

    var comments = function(list) {
      var sorted = []

      var grouped = _.groupBy(list, "username");

      _.forEach (grouped, function(comments, name){
        sorted.push({
          username: name,
          comment_count: _.size(comments)
        });
      })

      return _.sortBy(sorted, function(comment){
        return -comment.comment_count
      })

    }

    // export the worker function as a nodejs module
    module.exports = comments;
