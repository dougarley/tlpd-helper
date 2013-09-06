var http = require('http');
var options = {
  host: 'us.battle.net',
  path: '/api/wow/character/' + process.argv[2] + '/' + process.argv[3] + '?fields=mounts'
};

http.get(options, function(res) {
	console.log('STATUS: ' + res.statusCode);
	console.log('HEADERS: ' + JSON.stringify(res.headers));
	var body = '';

	res.on('data', function (chunk) {
		body += chunk;
		/*
		function find() {
		    for (var key in chunk) {
		        if (check.hasOwnProperty(key)) {
		            var current = paises[key];

		            if (creatureId == 32153) {
		               console.log("true");
		            } else { console.log("false"); }
		        }
		    }
		}
		*/
	});
}).on('error', function(e) {
  console.log('ERROR: ' + e.message);
});