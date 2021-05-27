const newsRouter = require("./news")
const siteRouter = require("./site")


function route(app){
    // app.get('/', (req, res) => {
    //     res.render('home')
    // });
    
    app.use('/news', newsRouter);
    app.use('/search',siteRouter)
    app.use('/',newsRouter);
    
    
    // app.post('/search',(req,res)=>{
    //   console.log(req.body);
    //   res.send('abc');
    // });
}

module.exports = route;