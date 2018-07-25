import { environment } from './../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';

import { MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';
import { NavbarComponent } from './navbar.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { MusicPageComponent } from './music-page/music-page.component';
import { PhotoPageComponent } from './photo-page/photo-page.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';

import { appRoutes } from './routes';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SplashPageComponent,
    MusicPageComponent,
    PhotoPageComponent,
    EventsPageComponent,
    SocialMediaComponent,
    ContactPageComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: false
    }),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ToastModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'Your_api_key'
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
