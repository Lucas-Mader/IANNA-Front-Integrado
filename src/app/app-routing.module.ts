import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WegHomeComponent } from './weg-home/weg-home.component';
import { ProductComponent } from './product/product.component';
import { SpecialServicesComponent } from './special-services/special-services.component';
import { AssistanceComponent } from './assistance/assistance.component';
import { InputsComponent } from './inputs/inputs.component';

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
    path: 'app-inputs',
    component: InputsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
