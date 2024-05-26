import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParseService {
  constructor() { }

  // Some methods or properties that should be exported
    async signup(name: string, email: string, password: string) {
    const params = { name , email, password };
    // const status =  await Parse.Cloud.run('addUserStudent', params);  
    console.log(status , "this is status");
    return status;
    
  }

  async login(email: string, password: string) {
  //   const params = { email, password };
  //   // const response = await Parse.Cloud.run('loginStudent', params);
  //   if (response.status === 1) {
  //     this.currentUser = response;
  //     // Save user to local storage on successful login
  //     localStorage.setItem(this.USER_KEY, JSON.stringify(response));
  //   }
  //   return response.status;
  }

}
