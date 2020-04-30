const verifySignUp = require('./verifySignUp');
const authJwt = require('./verifyJwtToken');
const authController = require('../controller/authController');
const userController = require('../controller/userController');

module.exports = function(app){
    app.post("/api/auth/signup",[verifySignUp.checkDuplicateUserNameOrEmail, verifySignUp.checkRolesExisted], authController.signup);
    app.post("/api/auth/signin", authController.signin);
    app.get("/api/users", [authJwt.verifyToken], userController.users);
    app.get("/api/test/user", [authJwt.verifyToken], userController.userContent);
    app.get("/api/test/pm",[authJwt.verifyToken, authJwt.isPmOrAdmin],userController.managementBoard);
    app.use(function(req, res, next){
        return res.status(404).send({
            status: 404,
            message: "Not Found"
        });
    });
    app.use(function(err, req, res, next){
        return res.status(500).send({
            status: 500,
            error: err
        });
    });
};