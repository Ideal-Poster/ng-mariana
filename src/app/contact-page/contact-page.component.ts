import { MessageService } from './../app.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';

import { fadeAnimation } from '../animations';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  // myName: string;
  // myEmail: string;
  // myMessage: string;
  // messages: Observable<any[]>;
  contactForm: FormGroup;
  formValid = false;

  constructor(private db: AngularFirestore, private messageService: MessageService, private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    // this.messages = this.db
    // .collection(config.collection_endpoint)
    // .snapshotChanges();
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.maxLength(500)]]
    });

    this.contactForm.valueChanges.subscribe((message) => {
      if (this.formValid !== this.contactForm.valid) {
        this.formValid = this.contactForm.valid;
      }
      console.log(message);
    });

  }

  saveMessage() {
    const message = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      message: this.contactForm.value.message
    };
    console.log(message);


    // this.messageService.addMessage(message);
  }
}
