var Item = require('../models/Item');

exports.createItem = function(req, res) {
    let tagArray = req.body.tags.split(', ')
    console.log("WTF IS THIS ", req.body.category)
    let item = {
        user_id: req.body._id,
        name: req.body.itemName,
        tags: tagArray,
        url: req.body.url,
        category: req.body.category,
    }
    Item.create(item, function(err, item) {
        if(err) {
            console.error(err)
            if(err.name === "MongoError" && err.code === 11000) {
                return res.json({code: 400, message: "Item exists"})
            } else {
                return res.json({code: 500, message: "Something went wrong", data: err.message})
            }
        } else {
            var data = item.toObject()
            return res.json({code: 200, message: "saved successfully", data: data})
        }
    })
}


exports.getWishlist = function(req, res) {
   const uid =  req.params.id;
   Item.find({user_id: uid}, function(err, items) {
    if(err) {
        console.error(err)
        if(err.name === "MongoError" && err.code === 11000) {
            return res.json({code: 400, message: "Item exists"})
        } else {
            return res.json({code: 500, message: "Something went wrong", data: err.message})
        }
    } else {
        var data = items
        console.log('data', data)
        return res.json({code: 200, message: "Got the Item List", data: data})
    }
   })
}