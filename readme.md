# Time-Lost Protodrake Helper Script #

## About ##
This script uses Node.js to make tracking the Time-Lost Protodrake easier. The script keeps track of the Vyragosa kills of players you add to it, and will also check and see if they have already collected the Time-Lost Protodrake mount.

## How It Works ##
Using Node.JS and the Battle.net this script:

1. Reads a JSON document of stored characters you are tracking and their respective servers.
2. Checks each character's activity & collect mounts.
3. Returns whether the character has recently looted Vyragosa, and when.
4. Returns whether or not the character has the Time-Lost Protodrake as a collected mount.

**Note:** This script *can not* track Vyragosa kills that are not looted. Additionally, since looting the Reigns of the Time-Lost Protodrake does not appear in the character's activity feed, the script *can not* accurately predict when the Time-Lost Protodrake itself was killed.

## Requirements ##
You *must* have [Node.JS](http://nodejs.org) installed to run this script.

## How To ##
### Installation & Running the Script ###
1. Clone the GitHub repo to your deskstop.
2. Add the names of characters you'd like to track, and their servers, to the `data.json` document.
3. Execute the script by navigating to the folder where you have saved the script and typing `node tlpd-stuff.js` in the command line or terminal.
	* Note: By default this will load the data.json document, however you create separate documents to track a separate group of characters, such as characters from specific server pools. You can them pass them to the script as an argument (eg. `node tlpd-stuff.js illidan.json`).

### Formatting data.json and other JSON documents ###
The `data.json` file is in standard JSON format. Each object stored within the object array includes both a character name & server. Each character name should be entered exactly how it appears in-game, including special characters. Each server name should be entered in all lowercase and with dashes in place of spaces similiar to how they would appear in the armory URL (eg. http://us.battle.net/wow/en/character/the-venture-co/{character}/)

### Troubleshooting ###
1. Before attempting to execute the script, please ensure that Node.JS is installed correctly.
2. If errors persist ensure that the character name & server have been entered correctly.
3. If errors still persist copy the contents of `data.json` into a JSON linter such as [JSONLint](http://jsonlint.com/) to check for formatting errors.