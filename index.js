const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render("index");
});

app.get('/about',(req,res)=>{
    res.send('heelo');
});

app.listen(3000,()=>{
    console.log("it is runni");
})