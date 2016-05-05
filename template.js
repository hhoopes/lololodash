// include the Lo-Dash library
    var _ = require("lodash");

    var templated = function(logins){
      return _.template("Hello <%= login_name %> (logins: <%= login_count %>)")
      ({ login_name: logins.name, login_count: logins.login.length })
    }
    // export the worker function as a nodejs module
    module.exports = templated;
