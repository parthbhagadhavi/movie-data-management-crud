const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/moviecrud')
const db=mongoose.connection
db.once('open',()=>{
    console.log("db connected successfully");
    
})

