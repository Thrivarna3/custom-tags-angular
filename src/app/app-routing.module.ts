import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TagInputsComponent } from './tag-inputs/tag-inputs.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'tag',
    pathMatch: 'full'
  },
  {
    path: 'tag',
    component: TagInputsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
