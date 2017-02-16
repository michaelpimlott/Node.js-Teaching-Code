
/*require modules*/
var express = require("express");

/*initilaize express app object*/

var app = express();

/* variables */
var root = __dirname
  , port = 3000;

/*configure express app*/

app.use( express.static(__dirname + "/public"));

/* create express routes */

app.get( '/hello', function helloCallback(req, res) {
  res.send("Hello, there handsome!");
});

/*sending JSON*/

app.get( "/someJSON", function someJSONCallback(req, res) {
  res.json({
    "one": {
      "so":"cool"
    },
    "two":"super cool",
    "three": ["love", "JSON", "and", "JavaScript"]
  });
});

/*basic html string*/

app.get( "/begin", function beginCallback(req, res) {

  res.send( "<h1>This is just the start</h1><p><3</p>")
})

/* start server on port 3000 */

app.listen( port, function listenCallback() {
  console.log("Express server is listening on port " + port);
  console.log("To test, browse to http://localhost:" + port);
});
