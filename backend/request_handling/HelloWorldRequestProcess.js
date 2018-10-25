var BaseAPIRequestProcessor = require('./BaseAPIRequestProcessor');

class HelloWorldRequestProcessor extends BaseAPIRequestProcessor {

    processSubTasks(req, res, next) {
        var name = req.query.name;
        var user_id = this.getLoggedInUserInfo().user_id;

        return new Promise(function (resolve, reject) {
            resolve();
        }).then(()=> {
            res.json({
                "result": "OK",
                "message": "Hello, " + name
            });
        });
    }

    checkForRequiredRequestParameters(req) {
        
        if (!super.checkForRequiredRequestParameters(req))
            return false;
        
        var name = req.query.name;

        if (typeof name === 'undefined')
            return false;
        
        return true;
    }

    getRequiredRequestParameters() {
        return super.getRequiredRequestParameters() + ", name";
    }

}

var instance = new HelloWorldRequestProcessor();

module.exports = instance;