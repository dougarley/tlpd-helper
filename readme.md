# Time-Lost Protodrake Helper Script #

## About ##
This script uses Node.js to make tracking the Time-Lost Protodrake easier. The script keeps track of the Vyragosa kills players you add to it, and will also check and see if they have already attained the Time-Lost Protodrake mount.

## How It Works ##
Using Node.js the script uses a JSON document to access the Battle.net API and check a designated characters recent activity and collected mounts. The script then prints out a timestamp (local time), of when Vyragosa was looted by each character, and whether or not the character has already learned the Time-Lost Protodrake.

**Note:** This script *can not* track Vyragosa kills that are not looted. Additionally, since looting the Reigns of the Time-Lost Protodrake does not appear in the character's activity feed, the script *can not* accurately predict when the Time-Lost Protodrake itself was killed.

## Requirements ##
You *must have* Node.JS installed to run this script.

## How To ##
1. Clone the GitHub repo to your deskstop.
2. Add the names of characters you'd like to track, and their servers, to the data.json document.
2. Execute the script by typing navigating to the folder where you saved the script and typing `node tlpd-stuff.js` in the command line or terminal.
	* Note: By default this will load the data.json document, however you create separate documents to track different folders. You can them pass them to the script as an argument (eg. `node tlpd-stuff.js illidan.json`).