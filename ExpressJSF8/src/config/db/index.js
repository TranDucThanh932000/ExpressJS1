const mongoose = require('mongoose')


async function connect(){
    try{
        await mongoose.connect('mongodb+srv://thanh123:thanh123@cluster0.w2k4l.mongodb.net/test',{
            useNewUrlParser : true,
            useUnifiedTopology : true,
            useCreateIndex:true,
        });
        console.log('connect successfully!')
    }catch(error){
        console.log('connect failure!')
    }
}

module.exports = {connect};