import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { DescriptionComponent } from './description/description.component';
import { GestionAnimalsComponent } from './gestion-animals/gestion-animals.component';
import { GestionUsersComponent } from './gestion-users/gestion-users.component';
import { PaymentComponent } from './payment/payment.component';
import { PopUpPaymentComponent } from './pop-up-payment/pop-up-payment.component';
import { RegisterComponent } from './register/register.component';
import { TreasuryComponent } from './treasury/treasury.component';

export const routes: Routes = [
  // ROUTE INITIALE
  {
    path: '',
    component: CatalogueComponent,
  },

  // ROUTES COMMUNE
  {
    path:'register',
    component : RegisterComponent
  },
  {
    path: 'description',
    component: DescriptionComponent
  },

  // ROUTES CLIENTS
  {
    path : 'cart',
    component : CartComponent
  },
  {
    path : 'payment',
    component : PaymentComponent
  },
  {
    path : 'pop-up-payment',
    component : PopUpPaymentComponent
  },

  // ROUTES ADMIN
  {
    path : 'gestion-users',
    component : GestionUsersComponent
  },
  {
    path: 'gestion-animals',
    component: GestionAnimalsComponent
  },
  {
    path : 'treasury',
    component : TreasuryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
