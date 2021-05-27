class NewsController{
    //[GET] /news
    index(req,res){
        res.render('news');
    }

    //[GET] /show/:lug
    show(req,res){
        res.send('New Ditail!');
    }
}

module.exports= new NewsController;