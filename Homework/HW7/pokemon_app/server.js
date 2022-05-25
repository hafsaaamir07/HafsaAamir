const express = require("express");
const app = express();
const PORT = 3000;

const pokemon = require("./models/pokemon")

app.set("view engine","jsx");
app.engine("jsx",require("express-react-views").createEngine());

app.use(express.urlencoded({extended: false}));

app.get("/", (req,res) => {
    res.send("Welcome to the Pokemon App!");
})

app.get("/pokemon", (req,res) =>{
    res.render("Index", {pokemons: pokemon});
})

app.get("/pokemon/:id",(req,res) => {
    res.send(req.params.id);
})

app.listen(3000, () => {
    console.log(`Server running on PORT ${PORT}`);
})