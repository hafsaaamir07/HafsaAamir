require('dotenv').config();
const express = require ("express");
const app = express();
const port = process.env.PORT || 3003;

console.log(process.env.PORT);

const plants = ["Monstrea Deliciosa", "Corpse Flower","Elephant-Foot Yam","Witches' Butter"];

app.get('/awesome', (req, res) => {
    res.send(`
      <h1>Plants are awesome!</h1>
      <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
    `);
  });

app.get("/:indexofPlantsArray", (req,res) => {
    res.send (plants[req.params.indexofPlantsArray]);
});

app.get('/hello/:firstname/:lastname', (req, res) => {
	//console.log(req.params);
    console.log('=========================================');
    console.log('This is the entire Request Object sent from the browser to the server: ');
    console.log(req);
    console.log('========================================');
	res.send('hello ' + req.params.firstname + ' ' + req.params.lastname);
});

app.get('/howdy/:firstName', function(req, res) {
    console.log(req.params);
    console.log(req.query);
    res.send('hello ' + req.query.title + ' ' + req.params.firstName);
  });

  app.listen(port, () => {
    console.log("I am listening on port", port);
});

/*http://localhost:300/2
    http: --> protocol
    locoalhost: --> host
    3000/ --> port
    2 --> path*
*/
