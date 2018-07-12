import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ThanksComponent } from './thanks/thanks.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: 'home', component: LandingPageComponent },
    { path: 'thanks', component: ThanksComponent },
    { path: '**', redirectTo: '/home' }
];

@NgModule({
   declarations: [
      AppComponent,
      LandingPageComponent,
      LandingPageComponent,
      ThanksComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
