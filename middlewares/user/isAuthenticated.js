const jwt = require('jsonwebtoken');
const {authCookie, privateKey} = require('../../config/config');

module.exports = function () {
    return (req, res, next) => {
        let token = req.cookies[authCookie];
        if (token) {
            jwt.verify(token, privateKey, function (err, data) {
                if (err) {
                    req.user = {};
                    res.clearCookie(authCookie);
                } else {
                    req.user = data;
                    res.locals.isLogged = !!data;
                    res.locals.email = data.email;
                    res.locals.username = data.username;
                }
            });
        }

        next();
    }
}

// module.exports = {
//     user: {
//         register(req, res, next) {
//         },
//         login(req, res, next) {
//         },
//     },
//     product: {
//         create: function (req, res, next) {
//         },
//         edit: (req, res, next) => {
//         }
//     },
// }
