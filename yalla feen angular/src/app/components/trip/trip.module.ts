import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { Routes, RouterModule } from '@angular/router';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { CustomComponent } from './custom/custom.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'custom', component: CustomComponent},
  {path: 'top-rated', component: TopRatedComponent}
];
@NgModule({
  declarations: [IndexComponent, TopRatedComponent, CustomComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class TripModule { }
