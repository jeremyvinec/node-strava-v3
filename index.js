/**
 * Created by austin on 9/18/14.
 */

var fs = require('fs')

    , util = require('./lib/util')
    , oauth = require('./lib/oauth')
    , athlete = require('./lib/athlete')
    , athletes = require('./lib/athletes')
    , activities = require('./lib/activities')
    , clubs = require('./lib/clubs')
    , gear = require('./lib/gear')
    , segments = require('./lib/segments')
    , segmentEfforts = require('./lib/segmentEfforts')
    , streams = require('./lib/streams')
    , uploads = require('./lib/uploads')
    , rateLimiting = require('./lib/rateLimiting')
    , runningRaces = require('./lib/runningRaces')
    , routes = require('./lib/routes')
    ;

var strava = {};

//assign various api segments to strava object
strava.oauth = oauth;
strava.athlete = athlete;
strava.athletes = athletes;
strava.activities = activities;
strava.clubs = clubs;
strava.gear = gear;
strava.segments = segments;
strava.segmentEfforts = segmentEfforts;
strava.streams = streams;
strava.uploads = uploads;
strava.rateLimiting = rateLimiting;
strava.runningRaces = runningRaces;
strava.routes = routes;

//and export
module.exports = strava;
