import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"kanbanfire-804db","appId":"1:704337068570:web:8bf62d257a923bc3a4c7a3","storageBucket":"kanbanfire-804db.appspot.com","apiKey":"AIzaSyAY7jLhNfiBmdN_XuMXG6iVGm1wApBPDaU","authDomain":"kanbanfire-804db.firebaseapp.com","messagingSenderId":"704337068570"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
