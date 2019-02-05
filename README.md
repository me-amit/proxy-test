# proxy-test
Test application for proxy configuration


created a proxy.conf.json file to act as a proxy server.


proxy.conf.json file:

{
  "/posts": {
    "target": "https://example.com",
    "secure": true,
    "changeOrigin": true
  }
}

place the proxy.conf.json file right next the the package.json file in the same directory.

Modify package.json file:

"start": "ng serve --proxy-config proxy.conf.json"

use npm start or ng serve --proxy-config proxy.conf.json
