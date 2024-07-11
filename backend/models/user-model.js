const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {type:String,required:true},
    password: {type:String, required: true},
    name:{type:String,required:true},
},{
    timestamps:true,
    toJSON: {getters:true},
}

);
module.exports = mongoose.model('User',userSchema,'users');//modelname,schema,users collection in db
