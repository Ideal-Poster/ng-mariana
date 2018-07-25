import { Injectable } from '@angular/core';
import { config } from './app.config';
import { Message } from './app.model';

import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: AngularFirestoreCollection<Message>;
  // private messageDoc: AngularFirestoreDocument<Message>;

  constructor(private db: AngularFirestore) {
    this.messages = db.collection<Message>(config.collection_endpoint);
  }

  addMessage(message) {
    // Add the new task to the collection
    this.messages.add(message);
  } // addTask
}
