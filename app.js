
/*require modules*/
var express = require("express");

/*initilaize express app object*/

var app = express();

/* variables */
var root = __dirname
  , port = 3000;

/*configure express app*/

app.use( express.static(__dirname + "/public"));

/* start server on port 3000 */

app.listen( port, function listenCallback() {
  console.log("Express server is listening on port " + port);
  console.log("To test, browse to http://localhost:" + port);
});
