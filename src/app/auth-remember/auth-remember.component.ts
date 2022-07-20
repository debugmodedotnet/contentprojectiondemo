import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-auth-remember',
  templateUrl: './auth-remember.component.html',
  styleUrls: ['./auth-remember.component.css']
})
export class AuthRememberComponent implements OnInit {

  @Output() rememberChecked: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }
  ngOnInit(): void {
  }
  onChecked(value: any) {
    let a = value?.target?.checked;
    this.rememberChecked.emit(a);
  }
}
