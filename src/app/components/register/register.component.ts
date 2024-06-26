
import { Component } from '@angular/core';
import { ParseService } from 'src/app/services/parse.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    //yaha par jo parse service lagana he yaha ae ga or authentication b neche construtor pass akre ge 

constructor(private service:ParseService  ,private authService: AuthService, private router: Router){}

async signup(firstnameElement: HTMLInputElement, emailElement: HTMLInputElement, passwordElement: HTMLInputElement){
  const firstname = firstnameElement.value;
  const email = emailElement.value;
  const password = passwordElement.value;

  return true;
}

 
 onsignup() {
  // Call the login() method from the AuthService
  this.authService.login();
  this.router.navigate(['/profile']);


  // Navigate to the desired page after login
  // (e.g., navigate to 'home-after-login')
  // This should be handled based on your routing setup
}
}
