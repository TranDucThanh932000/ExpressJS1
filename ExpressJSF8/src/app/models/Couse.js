const mongoose = require('mongoose')
const Schema= mongoose.Schema
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug);

const Course= new Schema({
    name : {type : String, maxLength : 255},
    singername : {type: String, maxLength:600},
    image :{type:String, maxLength :255},
    videoId:{type:String, maxLength: 255},
    lyrics:{type:String ,maxLength :10000 },
    createAt : {type: Date, default : Date.now},
    updateAt : {type: Date, default : Date.now},
    slug: { type: String, slug: "title",slug:'name',unique:true}
});

module.exports=mongoose.model('Course',Course)