const functions = require('firebase-functions');

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello world---");
});

exports.helloWorldStaging = functions.https.onRequest((request, response) => {
 response.send("Hello world staging---");
});
