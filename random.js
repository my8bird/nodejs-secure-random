var Buffer = require('buffer').Buffer,
    crypto = require('crypto');


function _parseArgs(arg_array) {
    if (arg_array.length === 0) { throw new Error('Atleast a callback argument is required'); }
    var is_range = arg_array.length > 2;

    return {
        cb:  arg_array[arg_array.length-1],
        min: is_range ? arg_array[0] : undefined,
        max: is_range ? arg_array[1] : undefined
    };
}

/*** Returns a random unsigned Int ***
 Returns the random int returned by nodes crypto library
*/
exports.getRandomInt = function(min, max, callback) {
    var args = _parseArgs(arguments);

    crypto.randomBytes(8, function(err, bytes_slow_buf) {
        if (err) { return cb(err); }

        var unsigned_int = Buffer(bytes_slow_buf).readUInt32LE(0);

        if (args.min !== undefined) {
            unsigned_int = unsigned_int % Math.abs(args.max - args.min) + args.min;
        }

        args.cb(null, unsigned_int);
    });
};
