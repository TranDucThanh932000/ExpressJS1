const Course = require('../models/Couse')
const {mongooseToObject} = require('../../util/mongoose')

class CourseController{
    //[GET] /courses/:videoId
    show(req,res,next){
        Course.findOne({videoId:req.params.videoId})
            .then(course => {
                res.render('courses/show',{course : mongooseToObject(course)})
            })
            .catch(next)
    }
    //[POST] /courses/store 
    create(req,res,next){
        res.render('courses/create')
    }

    store(req,res,next){
        const course = new Course(req.body);
        course.save()
        .then(() => res.redirect('/'))
        .catch(error => {
        })

    }
    //[GET] /courses/edit 
    edit(req,res,next){
        Course.findById(req.params.id)
        .then(course => res.render('courses/edit',{
            course : mongooseToObject(course)
        }))
        .catch(next)
        
    }
    //[PUT] /courses/:id
    update(req,res,next){
        Course.updateOne({_id:req.params.id},req.body)
        .then(() => res.redirect('/me/stored-courses'))
        .catch(next)
    }

    //[Delete] /:id
    delete(req,res,next){
        Course.deleteOne({_id:req.params.id})
        .then(() => res.redirect('back'))
        .catch(next);

        }
    }


module.exports= new CourseController();