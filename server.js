var express = require ("express");

var PORT = process.env.PORT || 4000; 
var app = express();

app.use(express.static("public")); 

//parse aplication body
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.listen(PORT, function() {
    console.log("listening on port:%s", PORT);
});