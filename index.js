const express=require('express')
const app=express();
const path=require('path')

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.set('view engine','ejs')

app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/:dynamic',(req,res)=>{
    let val=req.params.dynamic
    res.render(val)
})

app.listen(3000)