import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexCustomerComponent } from './customer/components/index-customer.component';
import { GalleryIndexComponent } from './gallery/components/gallery-index/gallery-index.component';


const routes: Routes = [
  { path: 'home', redirectTo: '/customerList', pathMatch: 'full'},
  { path: 'customerList', component: IndexCustomerComponent },
  { path: 'PhotoGrallery', component: GalleryIndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }