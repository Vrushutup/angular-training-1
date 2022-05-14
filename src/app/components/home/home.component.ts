import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
// import { LocalStorageService} from '../../services/local-storage.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name!: any;

  loginForm=new FormGroup({
    name:new FormControl('',[Validators.required])
  })
  
  
  constructor(private router: Router,
    // private myservice: LocalStorageService
    ) {}

  ngOnInit(): void {

  }
  // get name(){
  //   return this.loginForm.get('name');
  // }
  handleClear(){
    this.loginForm.reset();
  }
  btnClick(data: { name: String; }){
    this.name = data.name;
    localStorage.setItem("name",this.name)
    this.router.navigateByUrl('/list');
    console.log(this.name);
  };
  // onClickSubmit(data: { name: String; })
  // {
  //   localStorage.setItem("name",this.name)
  //   this.name = data.name;
  //   console.log(this.name);
   }

