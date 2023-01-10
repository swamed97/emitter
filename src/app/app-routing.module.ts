import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SubComponent } from './sub/sub.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'sub',component:SubComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
