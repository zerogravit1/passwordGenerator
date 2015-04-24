//make passwords

function makePasswords() {
    var text = [];
    var hold = "";
    var possible = "!#$%&*-0123456789@ABCDEFGHIJKLMNOPQRSTUVWXYZ^abcdefghijklmnopqrstuvwxyz";
    
    for (var i = 0; i < possible.length; ++i) {
        for (var j = 0; j < possible.length; ++j) {
            for (var k = 0; k < possible.length; ++k) {
                for (var l = 0; l < possible.length; ++l) {
                    for (var m = 0; m < possible.length; ++m) {
                        for (var n = 0; n < possible.length; ++n) {
                            for (var o = 0; o < possible.length; ++o) {
                                for (var p = 0; p < possible.length; ++p) {
                                    for (var q = 0; q < possible.length; ++q) {
                                        hold += possible.charAt(0 + q);
                                        hold += possible.charAt(0 + p);
                                        hold += possible.charAt(0 + o);
                                        hold += possible.charAt(0 + n);
                                        hold += possible.charAt(0 + m);
                                        hold += possible.charAt(0 + l);
                                        hold += possible.charAt(0 + k);
                                        hold += possible.charAt(0 + j);
                                        text.push(hold);
                                        hold = "";
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    console.log(text);
}

makePasswords();
