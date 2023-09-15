const express = require("express")

const app = express()

app.get("/",(req,res) => {
    res.json({
        msg: 'Hello GET'
    })
})

app.post("/",(req,res) => {
    res.send("Hello, World! post")
})

app.put("/",(req,res) =>{
    res.send("Hello, World! put")
})

app.patch("/",(req,res) =>{
    res.send("Hello, World! patch")
})

app.delete("/",(req,res) =>{
    res.send("Hello, World! delete")
})


app.listen(3000,() =>{
    console.log("listening on port 3000")
})