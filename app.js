var express = require('express'), 
	mongoose = require('mongoose'), 
	fs = require('fs'), 				// 	Standard node.js module
	http = require('http'),				//  So not in package.json
    config = require('./config/config'), // fs = file system
    root = __dirname, 					// http = create an http server
    app = express(), 
    server = null;

