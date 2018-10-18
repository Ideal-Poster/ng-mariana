import { API_KEY, DOMAIN } from '../lib/constants';
import * as functions from 'firebase-functions';
import * as mailgunjs from 'mailgun-js';

const mailgun = mailgunjs({
  apiKey: API_KEY,
  domain: DOMAIN
});

export const createMessage = functions.firestore
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
      to: 'mariqmmusic@gmail.com, mquinnmakwaia@gmail.com',
      subject: ('mariqmmusic.com message from ' + name),
      text: message
    };

    mailgun.messages().send(data, (error, body) => {
      console.log(body);
    });
  });
