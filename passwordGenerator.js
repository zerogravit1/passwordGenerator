//make passwords
var fs = require('fs');
var wstream = fs.createWriteStream('test.out');

function makePasswords() {
    var hold = "";
    var possibleProd = "!#$%&*-0123456789@ABCDEFGHIJKLMNOPQRSTUVWXYZ^abcdefghijklmnopqrstuvwxyz";
    var possible = "abcdefgh";
    var possible4 = "abcd";
    
    for (var i = 0; i < possible.length; ++i) {
        for (var j =  0; j < possible.length; ++j) {
            for (var k = 0; k < possible.length; ++k) {
                for (var l = 0; l < possible.length; ++l) {
                    for (var m = 0; m < possible.length; ++m) {
                        for (var n = 0; n < possible.length; ++n) {
                            for (var o = 0; o < possible.length; ++o) {
                                for (var p = 0; p < possible.length; ++p) {
                                        hold += possible.charAt(0 + i);
                                        hold += possible.charAt(0 + j);
                                        hold += possible.charAt(0 + k);
                                        hold += possible.charAt(0 + l);
                                        hold += possible.charAt(0 + m);
                                        hold += possible.charAt(0 + n);
                                        hold += possible.charAt(0 + o);
                                        hold += possible.charAt(0 + p);
                                        
                                        //console.log('inner: ' + hold + '\n');
                                        //hold = "";
                                        
                                        wstream.write(hold + '\n');
                                        wstream.end();
                                        hold = "";
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    wstream.end(function() {console.log('done');});
}

makePasswords();
