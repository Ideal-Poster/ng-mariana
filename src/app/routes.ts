import { ContactPageComponent } from './contact-page/contact-page.component';
import { PhotoPageComponent } from './photo-page/photo-page.component';
import { MusicPageComponent } from './music-page/music-page.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { Routes } from '../../node_modules/@angular/router';


export const appRoutes: Routes = [
  { path: '', component: SplashPageComponent },
  { path: 'events', component: EventsPageComponent },
  { path: 'gallery', component: PhotoPageComponent },
  { path: 'music', component: MusicPageComponent },
  { path: 'contact', component: ContactPageComponent }
  // { path: '', redirectTo: '/music ', pathMatch: 'full' }
  // { path: '**', component: PageNotFoundComponent }
];
