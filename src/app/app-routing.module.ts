import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { CartComponent } from './cart/cart.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { DescriptionComponent } from './description/description.component';
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
    path: 'animals/:id',
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
    path : 'treasury',
    component : TreasuryComponent
  },
  {
    path: 'board-admin',
    component : BoardAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
