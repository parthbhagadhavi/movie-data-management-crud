const express=require('express')
const path=require('path')
const app=express()
const db=require('./config/db')


app.set('view engine','ejs')
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'assets')));

app.use('/uploads',express.static(path.join(__dirname,'uploads')))
app.use('/',require('./routing/index'))
app.listen(7878,()=>{
    console.log(` http://localhost:7878`);
    
}) 