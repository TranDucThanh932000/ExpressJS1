const mongoose = require('mongoose')
const Schema= mongoose.Schema
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete')


const Course= new Schema({
    name : {type : String, maxLength : 255},
    singername : {type: String, maxLength:600},
    image :{type:String, maxLength :255},
    videoId:{type:String, maxLength: 255},
    lyrics:{type:String ,maxLength :10000 },
    createAt : {type: Date, default : Date.now},
    updateAt : {type: Date, default : Date.now},
    
    slug: { type: String, slug: "title",slug:'name',unique:true}
},
{
    timestamps:true,
});

//add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete,{
    deleteAt : true,
    overrideMethods : 'all'});


module.exports=mongoose.model('Course',Course)