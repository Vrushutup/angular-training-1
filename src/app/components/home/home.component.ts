import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loginForm=new FormGroup({
    name:new FormControl('',[Validators.required])
  })
  
  constructor() { }

  ngOnInit(): void {
  }
  get name(){
    return this.loginForm.get('name');
  }
  handleClear(){
    this.loginForm.reset();
  }

}
