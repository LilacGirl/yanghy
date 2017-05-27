var fortune = require('./lib/fortune.js');
var express = require('express');
var app = express();
app.set('port',process.env.PORT || 3000);
app.get('/',function(req,res){
	res.type('text/plain');
	res.send('meadowlark travel');
})
app.get('/about',function(req,res){
	/*res.type('text/plain');
	res.send('about meadowlark travel');*/
	res.render('about',{fortune:fortune.getFortune()});
})
app.use(function(req,res){
	res.type('text/plain');
	res.status(404);
	res.end('404-not found');
})
app.use(function(err,req,res,next){
	console.error(err.stack);
	res.type('text/plain');
	res.status(500);
	res.send('500 - server error');
})
app.listen(app.get('port'),function(){
	console.log('express started on http://localhost:'+app.get('port')+';press ctrl-c to terminate');
})