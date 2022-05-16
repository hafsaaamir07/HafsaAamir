const express = require ("express");
const app = express();

app.get ("/greeting/:name", (req,res) => {
    res.send (`<h1>Hello, ${req.params.name}! It's so nice to see you!`)
})









app.listen(3000, () =>{
    console.log("listening on port 3000");
})