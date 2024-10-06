const express =require("express")

const routes = express.Router()

routes.get("/home",(req, res) => {
    res.send("Welcome home")


})


routes.get("/about", (req, res) => {
    res.send("Welcome about")


})

routes.get("/contact", (req, res) => {
    res.send("Welcome contact")


})


module.exports = routes