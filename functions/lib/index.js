"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../lib/constants");
const functions = require("firebase-functions");
const mailgunjs = require("mailgun-js");
const mailgun = mailgunjs({
    apiKey: constants_1.API_KEY,
    domain: constants_1.DOMAIN
});
exports.createMessage = functions.firestore
    .document('messages/{messageId}')
    .onCreate((snap, context) => {
    // Get an object representing the document
    // e.g. {'name': 'Marie', 'age': 66}
    const newValue = snap.data();
    // access a particular field as you would any JS property
    const name = newValue.name;
    const message = newValue.message;
    // perform desired operations ...
    const data = {
        from: (name + ' <me@samples.mailgun.org>'),
        to: 'malcolmgourdine@gmail.com, mquinnmakwaia@gmail.com',
        subject: ('mariqmmusic.com message from ' + name),
        text: message
    };
    mailgun.messages().send(data, (error, body) => {
        console.log(body);
    });
});
//# sourceMappingURL=index.js.map