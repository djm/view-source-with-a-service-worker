// Service Worker

var modifiedResponse = `
<html>
  <head>
    <title>Service Worker Example</title>
  </head>
  <body>
    <h1>Modified response</h1>
    <p>If you're seeing this response, then:</p>
    <ul>
      <li>The service worker was successfully installed</li>
      <li>...and it returned this response rather than fetching from origin</li>
    </ul>
    <p><i><a href="/sw.js">View service worker</a></p>
  </body>
</html>

`
self.addEventListener('fetch', function(event) {
  console.log(event.request);
  var path = event.request.url.replace(self.location.origin, '');
  if (path == '/') {
    event.respondWith(new Response(modifiedResponse, {
      status: 200,
      statusText: "OK",
      headers: {'Content-Type': 'text/html'}
    }));
  }
});
