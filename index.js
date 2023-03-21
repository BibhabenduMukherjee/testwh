const express = require("express")
const app = express();
const cors = require("cors")
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.post("/api/wh",(req,res)=>{
    console.log(req.body._id)
    res.status(200).json({id : req.body});
})

app.get("/",(req , res)=>{

    console.log(req.body)
    res.send("welcome")
})
app.listen(3001,()=>{
    console.log("listen");
})