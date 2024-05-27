
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) { }

  async onLogin(user: string, password: string) {
   
    if(user==="skillmentor" && password==="skyworld345" ){
    this.router.navigate(['/home']);
    }
    else {
      alert('your user name or password is not correct')
    }

   
  
  }
}

