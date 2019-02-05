# proxy-test
Test application for proxy configuration


proxy.conf.json file:

{
  "/posts": {
    "target": "https://example.com",
    "secure": true,
    "pathRewrite": {
    "^/posts": ""
  },
    "changeOrigin": true
  }
}

placed the proxy.conf.json file right next the the package.json file in the same directory.

Modify the start command in the package.json file:

"start": "ng serve --proxy-config proxy.conf.json"

run my app, I'd have to use npm start or ng serve --proxy-config proxy.conf.json
