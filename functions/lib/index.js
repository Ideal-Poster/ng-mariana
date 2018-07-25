"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const functions = require("firebase-functions");
const mailgunjs = require("mailgun-js");
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const mailgun = mailgunjs({
    apiKey: constants_1.API_KEY,
    domain: constants_1.DOMAIN
});
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.createMessage = functions.firestore
    .document('messages/{messageId}')
    .onCreate((snap, context) => {
    // Get an object representing the document
    // e.g. {'name': 'Marie', 'age': 66}
    const newValue = snap.data();
    // access a particular field as you would any JS property
    const name = newValue.name;
    // perform desired operations ...
    const data = {
        from: 'Excited User <me@samples.mailgun.org>',
        to: 'malcolmgourdine@gmail.com, Ideal_Poster@mg.malcolmgourdine.com',
        subject: 'Hello',
        text: 'Testing some Mailgun awesomness!'
    };
    mailgun.messages().send(data, (error, body) => {
        console.log(body);
    });
});
//# sourceMappingURL=index.js.map