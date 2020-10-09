if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
var API_KEY = process.env.API_KEY
var express = require("express")
var app = express()

app.use(express.json())
app.use(express.static("public"))
app.post("/weather", (req, res) => {

})
app.listen(3000, () => {
    console.log("server started")
})