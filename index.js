var express = require('express');
var app = express();
//dotenv
require('dotenv').config();
//fs
var fs = require('fs');
app.set('view engine','pug');
//mongoose intialization
var mongoose = require('mongoose');
mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then((client) => {
    console.log("Connected Successfully")
  })
  .catch(err => console.log(err))
//Schema
var Schema = mongoose.Schema;

var articleSchema  = new Schema({
  title: String,
  sub_heading: String,
  author: String,
  date:Date,
  content: String
});

var articleModel = new mongoose.model('articleModel',articleSchema);

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
app.use('/public', express.static(__dirname + '/public'))

app.get('/', function(req,res){
//  pass_object = {obj :[1,{message: "Well, hello there"},3,4,5]}
  //res.render('posts', pass_object)
  articleModel.find(function(err,docs){
    if (err){
      console.log(err)
    }
    else{
      console.log(docs.reverse());
      res.render('template',{obj:docs.reverse()})
    }
  })

//api for delivering images from file system using fs
app.get('/image/:name', (req,res) => {
	fs.readFile('/home/ubuntu/images/' + req.params.name, (err, content) => {
		if (err){
			console.log(err);
		}else{
			res.send(content);
		}
	})
})

  //res.render('template')
})




var listener = app.listen(3000, function(){
  console.log('Listening at port',listener.address().port)
})
