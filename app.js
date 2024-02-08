const express=require("express")
const cors= require("cors")
const mongoose=require("mongoose")
const cakerouter=require("./controllers/cakerouter")
const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://Anusha64:Anusha645@cluster0.hljz34a.mongodb.net/cakeDB?retryWrites=true&w=majority",
{
    useNewUrlParser:true
})
app.use("/api/cake",cakerouter)
app.listen(3001,()=>{
    console.log("server running")
})