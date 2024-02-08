const express=require("express")
const cakemodel=require("../model/cakemodel")
const router=express.Router()

router.post("/add",async(req,res)=>
{
    let data=req.body
    let cake=new cakemodel(data)
    let result= await cake.save()
    res.json(
        {
            status:"success"
        }
    )
})
router.get("/view",async(req,res)=>{
    let data=await cakemodel.find()
    res.json(data)
})
router.post("/search",async(req,res)=>{
    let data=await cakemodel.find(input)
    res.json(data)
})
module.exports=router