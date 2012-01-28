Purpose
-------
Javascripts Math.random is not very random.  This library attempts to use the NodeJS crypto library to generate random numbers more randomly.

According to ent the entropy of Node's Math.random is 3.304235.  Using this module the entropy is 3.451241.  I am not able to determine how much this is but atleast secure_random is better.  If anyone has ideas to improve the code or how to test it those would be greatly appreciated.

Install
-------
    npm install secure_random
or

    git clone git@github.com:my8bird/nodejs-secure-random.git

Usage
-----
    var random = require('./random');

    // Just get random data to use as you wish
    random.getRandomInt(function(err, value) {
       // This value will be between 0 and MAX_INT where MAX_INT is a 32bit value
       console.log("Look ma I got some entropy", value);
       }
    );

    // Get a random int between to values
    random.getRandomInt(10, 100, function(err, value) {
       // The value will between 10-100
       console.log("Look ma I got some entropy", value);
       }
    );

