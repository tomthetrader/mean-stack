var mongoose = require('mongoose');

module.exports = function(config'){
	mongoose.connect(config.db);
	var db = mongoose.connect;

	db.on('error', function(){
		throw new Error('Unable to connect to database at ' + config.db);
	});
	
};

require('./config/db')(config);

var modelsPath = __dirname + '/server/models';
fs.readdirSync(modelsPath).forEach(function (file) {
  if (file.indexOf('.js') >= 0) {
    require(modelsPath + '/' + file);
  }
});

require('./config/express')(app, config);
require('./config/routes')(app);

var server = http.createServer(app);
server.listen(config.port, config.host);
console.log('App started on port ' + config.port);