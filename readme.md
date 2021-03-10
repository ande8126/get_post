## Server Review & AJAX Intro

Emirp Server Review & AJAX Intro
---

Stage 1: setup
- git init
- npm init --y
- npm install express
- setup folders (server, server/public, etc...)
- move over jQUery (server/public/vendors)
- create client.htlm (server/public)
- create client.js (server/public/scripts)
- create server.js (server)

Stage 2: spin up server
edit server.js

- require express
- create app
- app.use express.static on server/public
- spin up server on port 5000
- add start script to package.json

```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server/server.js"
  },
```
