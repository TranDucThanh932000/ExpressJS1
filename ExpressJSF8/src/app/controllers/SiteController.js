class SiteController{
    //[GET] /search
    index(req,res){
        res.render('home');
    }

    //[GET] /search/:lug
    search(req,res){
        res.render('search');
    }
}

module.exports= new SiteController;