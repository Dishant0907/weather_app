const express=require('express');
const hbs=require('hbs');

const path=require('path');
const app=express();
const port=process.env.PORT || 80;
const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,'../templates/views');
// console.log(path.join(__dirname,"../public"));
const partials_path =path.join(__dirname,'../templates/partials');
app.set('view engine','hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));
app.get('/',(req,resp)=>{
    resp.render('index');
})
app.get('/about',(req,resp)=>{
    resp.render('about');
})
app.get('/weather',(req,resp)=>{
    resp.render("weather");
})
app.get('*',(req,resp)=>{
    resp.render("404_error_page");
})

app.listen(port,()=>{
    console.log(`listening to the port at ${port}`);
})

