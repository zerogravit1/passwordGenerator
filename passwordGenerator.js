//make passwords

function makePasswords() {
  var text = "";
  var possible = "!#$%&*-0123456789@ABCDEFGHIJKLMNOPQRSTUVWXYZ^abcdefghijklmnopqrstuvwxyz";

for(var i = 0; i < possible.length; ++i){
  for(var j = 0; j < 8; ++j) {
    text += possible.charAt(i);
  }
  console.log(text);
}

}

makePasswords();
