fs = require('fs')
fs.readFile('data.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var chardata = JSON.parse(data);
  console.log(chardata.characters[0]);
});

/*
var http = require('http');
var options = {
  host: 'us.battle.net',
  path: '/api/wow/character/' + process.argv[2] + '/' + process.argv[3] + '?fields=mounts'
};

http.get(options, function(res) {
	//console.log('STATUS: ' + res.statusCode);
	//console.log('HEADERS: ' + JSON.stringify(res.headers));
	var body = '';

	res.on('data', function (chunk) {
		body += chunk;
	});

	res.on('end', function() {
        var response = JSON.parse(body);
        var daloop = response.mounts.collected;
        for(i=0;i<daloop.length;i++) {
        	if(daloop[i].creatureId == 32153) { console.log("TLPD = true")}
        }
    });
}).on('error', function(e) {
  console.log('ERROR: ' + e.message);
});
*/
