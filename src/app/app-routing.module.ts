import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WegHomeComponent } from './weg-home/weg-home.component';
import { ProductComponent } from './product/product.component';
import { SpecialServicesComponent } from './special-services/special-services.component';
import { AssistanceComponent } from './assistance/assistance.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'app-weg-home',
    component: WegHomeComponent
  },
  {
    path: 'app-product',
    component: ProductComponent
  },
  {
    path: 'app-special-services',
    component: SpecialServicesComponent
  },
  {
    path: 'app-assistance',
    component: AssistanceComponent
  },
  {
    path: 'app-profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
