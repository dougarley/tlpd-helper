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
	});

	res.on('end', function() {
        var response = JSON.parse(body);
        //console.log("Got response: ", response);

        response.mounts.collected.forEach(function(entry) {
        	if(entry.creatureId == 32153) {
        		console.log("Player has mount: " + entry.name)
        	}
        });
    });
}).on('error', function(e) {
  console.log('ERROR: ' + e.message);
});