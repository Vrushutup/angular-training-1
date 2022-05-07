import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
{
  path:'',
pathMatch:'full',
component:HomeComponent
},
{
  path:'list',
component:ListComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
