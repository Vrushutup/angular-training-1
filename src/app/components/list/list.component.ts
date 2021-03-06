import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 name!: any;
constructor(private router: Router) { }

  ngOnInit(): void {
    this.name=localStorage.getItem('name')
  }

  btnClick=  () => {
    this.router.navigateByUrl('/');
    localStorage.removeItem('name');
   };
}
