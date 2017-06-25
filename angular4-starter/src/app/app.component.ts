import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

import { ConstantsService } from './constants.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private constantService: ConstantsService) {

  }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: this.constantService.getFirebaseApiKey(),
      authDomain: this.constantService.getFirebaseAuthDomain(),
    });
  }
}
