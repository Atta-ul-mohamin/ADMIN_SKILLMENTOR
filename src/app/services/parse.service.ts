import { Injectable } from '@angular/core';
import * as Parse from 'parse';

export interface TitleData {
  title: string;
  cardId: string;
}

export interface TitlesResponse {
  status: number;
  data: TitleData[];
  message?: string;
  error?: string;
}

@Injectable({
  providedIn: 'root'
})

export class ParseService {
  private readonly USER_KEY = 'currentUser';
  private currentUser: any;

  constructor() {
    Parse.initialize('myAppId', 'myMasterKey');
    (Parse as any).serverURL = 'http://localhost:1336/parse';
    (Parse as any).liveQueryServerURL = 'ws://localhost:1337/parse';
    // Retrieve the user from local storage on service initialization
    const storedUser = localStorage.getItem(this.USER_KEY);
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
    }
  }


 


  // (6)
  async login(email: string, password: string) {
    const params = { email, password };
    const response = await Parse.Cloud.run('loginStudent', params);
    if (response.status === 1) {
      this.currentUser = response;
      // Save user to local storage on successful login
      localStorage.setItem(this.USER_KEY, JSON.stringify(response));
    }
    return response.status;
  }

  logout() {
    // Clear user from local storage and reset currentUser
    localStorage.removeItem(this.USER_KEY);
    this.currentUser = null;
    // Optionally, you can call Parse's logout method if needed
    Parse.User.logOut();
  }

 async getData(){
  const response = await Parse.Cloud.run('getDataAdmin');
  return response;
 }

 async MUserData(){
  const response = await Parse.Cloud.run('getMUserData');
  return response
}

async MUserTData(){
  const response = await Parse.Cloud.run('getMUserTData');
  return response
 }
 async HistoryData(){
  const response = await Parse.Cloud.run('getHistoryData');
  return response
 }
}
