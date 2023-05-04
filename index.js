const express = require("express")
const path = require("path")
const app = express()

app.use(express.urlencoded({extended:false}))

// ~/publicにあるHTMLファイルを読み込む．
app.use(express.static(path.join(__dirname,"public")))

// app.get("/",function(req,res){
//     console.log("req=",req)
//     res.send("<h1>Top page </h1>")
// })

app.post("/api/v1/quiz", function(req,res){
    // フォームの入力をanswerとして持つ
    const answer = req.body.answer
    if(answer==="2"){
        // res.send("<h1>正解！</h1>")
        res.redirect("/correct.html")
    }else{
        // res.send("不正解")
        res.redirect("/wrong.html")
    }
    res.send(answer)
})

const PORT = process.env.PORT || 3000;
app.listen(PORT,function(){
    console.log("I am running!")
})

console.log("最終行")