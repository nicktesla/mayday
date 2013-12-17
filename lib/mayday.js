#!/usr/bin/env node

/*
 * mayday
 * 
 *
 * Copyright (c) 2013 Nick
 * Licensed under the MIT license.
 */

'use strict';

//node dependencies
var open = require('open');

//get desired technology from user input
var userArgs = process.argv.slice(2), //argument we want is at index 2 0-node, 1-path to command, 2-argument
	technology = userArgs[0];

//open browser window to appropriate url
if(technology.toLowerCase() == "factor") {
	open("http://trymayday.nodejitsu.com/new/factor");
	//open("http://localhost:3000/new/factor");
}
else {
	console.log('sorry you need to choose factor');
}

