#! /usr/bin/env node

var chardata;
var http = require('http');
var moment = require('moment');
var linebreak = ('\n========================================\n');
var loljson;
var tlpd_id = 32153;
var vyra_loot = 44732;

fs = require('fs')

// If an argument is passed, use that argument as target file, otherwise default to data.json
if (process.argv[2]) { 
    loljson = process.argv[2]; 
} else { 
    loljson = 'data.json';
}

// Loop through the JSON file
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
            var body = '';

            res.on('data', function (chunk) {
                body += chunk;
            });

            res.on('end', function() {
                var response = JSON.parse(body);
                var mntloop = response.mounts ? response.mounts.collected : [];
                var feedloop = response.feed ? response.feed : [];

                console.log(linebreak);

                // Log out character name
                console.log(response.name);     

                // Check to see if character has TLPD
                mntloop.forEach(function(mount) {
                    if(mount.creatureId == tlpd_id) { console.log("Has Time-Lost Protodrake"); }
                });

                // Check character activity feed for recent Vyragosa loot
                feedloop.forEach(function(feed) {
                    if(feed.type == "LOOT" && feed.itemId == vyra_loot) {
                        console.log("Has looted Vyragosa:", moment(feed.timestamp).format('lll'));
                    }
                });
            });
        }).on('error', function(e) {
            console.log('ERROR: ' + e.message);
        });
    }
});
