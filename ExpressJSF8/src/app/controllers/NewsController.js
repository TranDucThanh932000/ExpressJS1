const Course = require('../models/Couse')
const {mutipleMongooseToObject} = require('../../util/mongoose')

class NewsController{
    //[GET] /news
    show(req,res,next){
        Course.find({})
        .then(courses => {
            res.render('home',{
                courses : mutipleMongooseToObject(courses)
            })
        } )
        .catch(next)
    }

}

module.exports= new NewsController;