var chardata;
var http = require('http');
var linebreak = ('\n========================================\n');
var loljson;

fs = require('fs')

if (process.argv[2]) { 
    loljson = process.argv[2]; 
} else { 
    loljson = 'data.json';
}


fs.readFile(loljson, 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }
    
    chardata = JSON.parse(data);

    for(t=0;t<chardata.characters.length;t++){
        var options = {
          host: 'us.battle.net',
          path: '/api/wow/character/' + chardata.characters[t].charserver + '/' + chardata.characters[t].charname + '?fields=mounts,feed'
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
                var mntloop = response.mounts.collected;
                var feedloop = response.feed;

                console.log(linebreak);
                console.log(response.name);

                for(i=0;i<mntloop.length;i++) {
                  if(mntloop[i].creatureId == 32153) { console.log("Has Time-Lost Protodrake") }
                }

                for(i=0;i<feedloop.length;i++) {
                    if(feedloop[i].type ="LOOT" && feedloop[i].itemId == 44732) { 
                        var mmToMonth = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");

                        function tm(timestamp){
                            var dt = new Date(timestamp);
                            var mm = mmToMonth[dt.getMonth()];
                            return dt.getDate() + "-" + mm + "-" + dt.getFullYear() + " " + dt.getHours() + ":" + dt.getMinutes();
                        }

                        console.log("Has killed Vyragosa:", tm(feedloop[i].timestamp));
                    }
                }
            });
        }).on('error', function(e) {
            console.log('ERROR: ' + e.message);
        });
    }
});