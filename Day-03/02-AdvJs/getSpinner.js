create a function "getSpinner" that returns an object ("spinner").  

usage :
=======
var spinner = getSpinner();

The object returned is expected to exhibit the following behavior.

usage:
======
spinner.up(); //=> 1
spinner.up(); //=> 2
spinner.up(); //=> 3
spinner.up(); //=> 4

spinner.down(); //=> 3
spinner.down(); //=> 2
spinner.down(); //=> 1
spinner.down(); //=> 0
spinner.down(); //=> -1


