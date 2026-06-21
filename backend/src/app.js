const express = require("express")
const multer = require("multer")
const uplodefile = require("./service/storage.service")
const postmodel = require("./models/post.models")
const cors = require("cors")

const app = express();
app.use(cors())
app.use(express.json())

const upload=multer({storage:multer.memoryStorage()})

app.post("/create-post", upload.single("image"),async(req,res)=>{

    const result = await uplodefile(req.file.buffer)

    const post = await postmodel.create({
        image:result.url,
        caption:req.body.caption,
    })

    return res.status(201).json({
        message:"post created successfully",
        post
    })

    console.log(result);
    
    
    
})

app.get("/posts", async(req,res)=>{

    const posts = await postmodel.find()

    return res.status(200).json({
        message:"fetched successfully",
        posts
    })
})

module.exports=app;