import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EmplistComponent } from './emplist/emplist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot( [ {
    path:'add',component:AddComponent
  }, 
  {
    path:'update',component:UpdateComponent
  }, 
  {
    path:'emplist',component:EmplistComponent
  }, 
  
  { path: '',
  redirectTo: '/emplist',
  pathMatch: 'full'
},
{ path: '**', component: PagenotfoundComponent }
])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
