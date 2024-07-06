const express=require("express")
const port=3000
const app=express();

app.get("login",(req,res)=>{
    res.send("hello")
})
app.listen(port,()=>{
    console.log("running")
})