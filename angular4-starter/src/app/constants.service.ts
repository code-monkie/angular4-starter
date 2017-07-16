import { Injectable } from '@angular/core';

const apiKey: string  = "";
const authDomain: string = "";
const databaseUrl: string = "";

@Injectable()
export class ConstantsService {

  constructor() { }

  getFirebaseApiKey() {
    return apiKey;
  }

  getFirebaseAuthDomain() {
    return authDomain;
  }

  getFirebaseDatabaseUrl() {
    return databaseUrl;
  }

}
