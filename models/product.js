var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//set up
var schema = new Schema({
    imagePath: {type:String, required: true},
    title: {type:String, required: true},
    description: {type:String, required: true},
    price: {type:Number, required: true}
});
// create model
module.exports = mongoose.model('Product', schema);