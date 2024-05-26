
// signin.component.ts
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
// import { ParseService } from 'src/app/services/parse.service';

// Adjust the import path accordingly
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) { }

  async onLogin(email: string, password: string) {
    // Call the login() method from the AuthService
    this.authService.login();
    // this.router.navigate(['/home-after-login']);

    // // This should be handled based on your routing setup
    // const user = await this.parseService.login(email, password);
    // if (user == 1) {
    //   alert('Login successful ');
    //   this.router.navigate(['/home-after-login']);

    // } if (user == 0) {
    //   // handle login failure
    //   alert('incorrect name or password');
    // }
  
  }
}

