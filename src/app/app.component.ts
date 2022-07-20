import { Component } from '@angular/core';
import { IUser } from './auth/user.entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contentprojectiomdemo';
  isRemember = false; 
  Login(user:IUser){
    console.log('Login',user, this.isRemember);
  }

  SingnUp(user:IUser){
    console.log('signup',user);
  }

  RememberMe(value:boolean){
    this.isRemember = value; 
  }
}
