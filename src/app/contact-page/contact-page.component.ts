import { MessageService } from './../app.service';
import { Observable } from 'rxjs';
import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
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

  constructor(
    private db: AngularFirestore,
    private messageService: MessageService,
    private formBuilder: FormBuilder,
    private _el: ElementRef,
    private _r: Renderer2
  ) {

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
    this.contactForm.reset();
    this.contactForm.markAsUntouched();

    const success = this._el.nativeElement.querySelectorAll('.counter-success');
    const danger = this._el.nativeElement.querySelectorAll('.counter-danger');
    const textSuccess = this._el.nativeElement.querySelectorAll('.text-success');
    const textDanger = this._el.nativeElement.querySelectorAll('.text-danger');
    success.forEach((element: any) => {
        this._r.removeClass(element, 'counter-success');
    });
    danger.forEach((element: any) => {
        this._r.removeClass(element, 'counter-danger');
    });
    textSuccess.forEach((element: any) => {
        this._r.setStyle(element, 'visibility', 'hidden');
    });
    textDanger.forEach((element: any) => {
        this._r.setStyle(element, 'visibility', 'hidden');
    });
    // form.reset();
  }
}
