var User = require('../models/User');
var bcrypt = require('bcryptjs');


exports.registerUser = function(req, res) {
    var hashedPassword = bcrypt.hashSync(req.body.user.password)
    req.body.user.password = hashedPassword

    User.create(req.body.user, function(err, user) {
        if (err) {
            console.error(err)
            if(err.name === 'MongoError' && err.code === 11000) {
                return res.json({code: 400, message: 'User name or email aleary in use. Try another one.' })
            } else {
                return res.json({code: 500, message: 'Something went wrong', data : err.message })
            }
        } else {
            var data = user.toObject()
            return res.json({code: 200, data: data})
        }
    })
    
}