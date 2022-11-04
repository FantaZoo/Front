import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './register/register.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { DescriptionComponent } from './description/description.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { PopUpPaymentComponent } from './pop-up-payment/pop-up-payment.component';
import { GestionUsersComponent } from './gestion-users/gestion-users.component';
import { GestionAnimalsComponent } from './gestion-animals/gestion-animals.component';
import { TreasuryComponent } from './treasury/treasury.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    CatalogueComponent,
    DescriptionComponent,
    CartComponent,
    PaymentComponent,
    PopUpPaymentComponent,
    GestionUsersComponent,
    GestionAnimalsComponent,
    TreasuryComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
