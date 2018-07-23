var http = require('http');
var fs = require('fs');

// Set Port (for local use)
var PORT = 8080;

// State what to do after we start using HTTP method
var server = http.createServer(handleRequest);

// Start our server
server.listen(PORT, function() {
    // Callback lets us know server is successfully listening.
    console.log('Server listening on: http://localhost:' + PORT);
  });
  

// Our Request function - how to deal with req and res
function handleRequest(req, res) {
  // Capture the url the request is made to
  var path = req.url;

    // Depending on the URL, display a different HTML file.   
    //  No need for breaks on switch as we are using returns that break   
  switch (path) {
    case '/':
      return displayPage('/index.html',path, req, res);

    case '/favorite-movies':
      return displayPage('/favorite-movies.html', path, req, res);

    case '/favorite-foods':
      return displayPage('/favorite-foods.html', path, req, res);

    case '/favorite-css':
      return displayPage('/favorite-css.html', path, req, res);

    default:
      return display404(path, req, res);
  }
}

// When someone visits the "http://localhost:8080/" path, this function is run.
// The file path is dynamically added through parameters and __dirname syntax
function displayPage(file, url, req, res) {
  fs.readFile(__dirname + file, function(err, data) {
    // shows us the path to the file
    console.log(__dirname);
    // send response to head to let know request is ok
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // send the file as the data parameter to user
    res.end(data);
  });
}

// For our 404 case
function display404(url, req, res) {
  var myHTML =
    '<html>' +
    '<body><h1>404 Not Found </h1>' +
    '<p>The page you were looking for: ' +
    url +
    ' can not be found</p>' +
    '</body></html>';

  res.writeHead(404, { 'Content-Type': 'text/html' });

  // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
  res.end(myHTML);
}