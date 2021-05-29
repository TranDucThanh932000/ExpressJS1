const Course = require('../models/Couse')
const {mutipleMongooseToObject} = require('../../util/mongoose')

class SiteController{
    //[GET] /search
    index(req,res,next){
        Course.find({})
        .then(courses => {
            res.render('home',{
                courses : mutipleMongooseToObject(courses)
                //ngan gon la courses
            })
        } )
        .catch(next)
    }

    //[GET] /search/:lug
    search(req,res){
        res.render('search');
    }
}

module.exports= new SiteController;