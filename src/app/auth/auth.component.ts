import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, ContentChild, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AuthMessageComponent } from '../auth-message/auth-message.component';
import { AuthRememberComponent } from '../auth-remember/auth-remember.component';
import { IUser } from './user.entity';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, AfterContentInit, AfterViewInit {
  isShowMessage = false; 
  @Output() submitted: EventEmitter<IUser> = new EventEmitter<IUser>();
  @ContentChild(AuthRememberComponent) remember? : AuthRememberComponent;
  @ViewChild(AuthMessageComponent) message ? : AuthMessageComponent;
  onSubmit(value: IUser) {
    this.submitted.emit(value);
  }
  constructor(private cd: ChangeDetectorRef){

  }
  ngOnInit(): void {

   // console.log(this.message);

  }

  ngAfterViewInit(): void {
    if(this.message != undefined){
      this.message.days = 30; 
      this.cd.detectChanges();
    }
    
  }

  ngAfterContentInit(): void {
    if(this.remember != undefined){
      this.remember.rememberChecked.subscribe(
        data=>{
          this.isShowMessage = data; 
        }
      )
    }
    console.log(this.remember);
  }

}
