const mongoose=require("mongoose")

const cakeschema=new mongoose.Schema(
    {
        name:String,
        flavour:String,
        price:String,
        place:String
    }
)
module.exports=mongoose.model("cake",cakeschema)