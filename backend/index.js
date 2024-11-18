const express=require("express");
const app= express();
app.use(express.json());
const port = process.env.PORT||5000;
app.get("/" ,(req,res)=>{res.send("hello")});
app.listen(port,()=>{console.log("app is live on port " + port)});