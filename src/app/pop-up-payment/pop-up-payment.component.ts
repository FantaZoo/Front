import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { environment } from 'src/environments/environment';
import { Orders } from '../share/orders';
import { ShoppingCart } from '../share/shoppingCart';

@Component({
  selector: 'app-pop-up-payment',
  templateUrl: './pop-up-payment.component.html',
  styleUrls: ['./pop-up-payment.component.scss']
})
export class PopUpPaymentComponent implements OnInit {
  
  showSuccess: boolean = false;

  public payPalConfig?: IPayPalConfig;

  constructor(private http: HttpClient,
    public dialogRef: MatDialogRef<PopUpPaymentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit(): void {
      this.initConfig();
    }
    
    validerPaiement(){
      const order = {
        userID: this.data.userID,
        total_article: this.data.animal,
        total_price: this.data.price
      }
      const shoppingCart = {
        products: this.data.carts
      }
      this.http.post<Orders>(`${environment.url}/orders/`, order).subscribe((res: any) => {
        });
      alert("Paiement validé")

      this.data.cart.forEach((element: any) => {
        this.http.delete<ShoppingCart>(`${environment.url}/shoppingcarts/${element.productID}/`).subscribe((res: any) => {
        });
        this.http.patch(`${environment.url}/animals/${element.id}/`, {animal_status: "VENDU"}).subscribe((res: any) => {
        });
      });
      this.dialogRef.close();
    }

    private initConfig(): void {
      this.payPalConfig = {
      currency: 'EUR',
      clientId: 'sb',
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'EUR',
              value: '9.99',
              breakdown: {
                item_total: {
                  currency_code: 'EUR',
                  value: '9.99'
                }
              }
            },
            items: [
              {
                name: 'Enterprise Subscription',
                quantity: '1',
                category: 'DIGITAL_GOODS',
                unit_amount: {
                  currency_code: 'EUR',
                  value: '9.99',
                },
              }
            ]
          }
        ]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        actions.order.get().then((details: any) => {
        });
      },
      onClientAuthorization: (data) => {
        this.showSuccess = true;
      },
      onCancel: (data, actions) => {
      },
      onError: err => {
        console.log(err);
      },
      onClick: (data, actions) => {
      },
    };
  }
}
