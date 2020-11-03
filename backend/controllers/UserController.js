var User = require('../models/User');

exports.getUserInfo = function(req, res) {
    const uid = req.params.id;
    console.log('the uid', uid)

    User.find({uid: uid}, function(err, user) {
        if (err) {
            console.error(err)
            if (err.name === "MongoError" && err.code === 11000) {
                return res.json({code: 400, message: "User does Not Exist"})
            } else {
                return res.json({code: 500, message: "Something Went Wrong"})
            }
        } else {
            console.log(user)
            return res.json({code: 200, message: "got the user", data: user})
        }
    })

}