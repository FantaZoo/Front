import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { PopUpPaymentComponent } from '../pop-up-payment/pop-up-payment.component';
import { Orders } from '../share/orders';
import { ShoppingCart } from '../share/shoppingCart';
import { User } from '../share/user';
import { interval } from 'rxjs';


export interface Cart{
  id: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  displayedColumns: string[] = ['nom', 'prix', 'action'];
  dataSource!: any;
  products: any = [];
  total_price: number = 0;
  orders: Orders = new Orders();
  isLoading: boolean = true;
  interval: any;

  constructor(public dialog: MatDialog,
    private http: HttpClient) { }
  
  getCart(): void {
        const userid = Number(localStorage.getItem('user'));
    this.http.get(`${environment.url}/shoppingcarts/?userID=${userid}`)
    .subscribe((data) => {
      this.dataSource = data;
      this.orders.userID = userid;
      this.dataSource.forEach((element: any) => {
        this.http.get(`${environment.url}/animals/${element.productID}/`)
        .subscribe((data2: any) => {
          data2.productID = element.id;
          this.products.push(data2);
          if (this.products.length === this.dataSource.length) {
            const price = this.products.reduce((accumulator: any, object: any) => {
              return accumulator + object.price;
            }, 0);
            this.total_price = price;
            this.orders.total_price = price;
          }
          let numberAnimals = this.products.length; 
          this.orders.total_animals = numberAnimals;
        });
      });
    });
  }

  ngOnInit(): void {
    this.getCart();
    this.interval = setInterval(() => {
      if (this.products !== 0){
        this.isLoading = false;
      } else {
        this.isLoading = true;
    }
  }, 1000);    
    
  }

  openDialog() {
    console.log(this.total_price);
    
    const dialogRef = this.dialog.open(PopUpPaymentComponent, {
      data: {userID: this.orders.userID, price: this.total_price, animal: this.orders.total_animals, cart: this.products}
    });

    dialogRef.afterClosed().subscribe(result => {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    });
  }

  deleteItem(id: number) {
    this.http.delete(`${environment.url}/shoppingcarts/${id}/`)
    .subscribe((data) => {
      window.location.reload();
    })
  }

}
