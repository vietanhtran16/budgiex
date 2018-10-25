var BaseModel = require("../models/BaseModel");

class LoginSession extends BaseModel {
    getUserInfo(sessionToken) {
        var sql = `select s.user_id from LoginSessions s join Users u on s.user_id=u.user_id where s.token='${sessionToken}'`;

        return this.databaseConnection.query(sql);
    }    
}

var instance = new LoginSession();
module.exports = instance;
