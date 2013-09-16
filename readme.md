# Time-Lost Proto-Drake Helper Script #

## About ##
This script uses [node.js](http://nodejs.org) to make tracking the Time-Lost Proto-Drake easier. The script keeps track of the Vyragosa kills of players you add to it, and will also check and see if they have already collected the Time-Lost Proto-Drake mount.

## How It Works ##
Using node.js and the Blizzard WoW API, this script will:

1. Open a local JSON document containing characters you are tracking and their respective servers.
2. Checks each character's activity & collect mounts using the [Blizzard World of Warcraft API](https://github.com/Blizzard/api-wow-docs).
3. Returns whether the character has recently looted Vyragosa, and when.
4. Returns whether or not the character has the Time-Lost Proto-Drake as a collected mount.

**Note:** This script *can not* track Vyragosa kills that are not looted. Additionally, since looting the Reigns of the Time-Lost Proto-Drake does not appear in the character's activity feed, the script *can not* accurately predict when the Time-Lost Proto-Drake itself was killed.

## Requirements ##
You *must* have [node.js](http://nodejs.org) and [npm](https://npmjs.org/) installed to run this script.

## How To ##
### Installation & Running the Script ###
1. Clone the GitHub repo to your computer, and navigate to the directory where you cloned the script.
2. Add the names of characters you'd like to track, and their servers, to the `data.json` document.
3. Install the dependencies (namely, moment.js) by running `npm install` inside the directory.
4. Execute the script by navigating to the folder where you have saved the script and typing `node tlpd.js` in the command line or terminal.
	* By default this will load the data.json document, however you create separate documents to track a separate group of characters, such as characters from specific server pools. You can them pass them to the script as an argument (eg. `node tlpd.js illidan.json`).
	* Unix based systems can also type `./tlpd.js` into the terminal to execute the script.
	* Unix based systems may also install the script as a global executable by running `npm link` from inside the directory, and then using `tlpd` from anywhere instead of the command above in step 4.

### Formatting data.json and other JSON documents ###
The `data.json` file is in standard JSON format. Each object stored within the `characters` object array includes both a character name & server. Each character name should be entered exactly how it appears in-game, including special characters. Each server name should be entered in all lowercase and with dashes in place of spaces similiar to how they would appear in the armory URL (eg. http://us.battle.net/wow/en/character/the-venture-co/{character}/)

### Troubleshooting ###
1. Before attempting to execute the script, please ensure that node.js and npm are installed correctly.
2. If errors persist ensure that the character name & server have been entered correctly.
3. If errors still persist copy the contents of `data.json` into a JSON linter such as [JSONLint](http://jsonlint.com/) to check for formatting errors.

## License and Copyright ##
Copyright (c) 2013 Doug Arley

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.