import { Injectable } from '@angular/core';

const apiKey: String  = "";
const authDomain: String = "";

@Injectable()
export class ConstantsService {

  constructor() { }

  getFirebaseApiKey() {
    return apiKey;
  }

  getFirebaseAuthDomain() {
    return authDomain;
  }

}
