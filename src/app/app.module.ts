import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
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
import {MatCardModule} from '@angular/material/card';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormCreateUserComponent } from './form-create-user/form-create-user.component';
import {MatGridListModule} from '@angular/material/grid-list';

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
    HeaderComponent,
    BoardAdminComponent,
    FormCreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
