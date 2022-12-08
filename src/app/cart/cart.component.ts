import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { PopUpPaymentComponent } from '../pop-up-payment/pop-up-payment.component';
import { Orders } from '../share/orders';
import { ShoppingCart } from '../share/shoppingCart';
import { User } from '../share/user';

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

  constructor(public dialog: MatDialog,
    private http: HttpClient) { }
  
  getCart(): void {
    const userid = Number(localStorage.getItem('user'));
    this.http.get(`${environment.url}/shoppingcarts/?userID=${userid}`)
    .subscribe((data) => {
      this.dataSource = data;
      this.orders.userID = userid;
      console.log(data);
      let price = 0;
      for (let i = 0; i < this.dataSource.length; i++) {        
        this.http.get(`${environment.url}/animals/${this.dataSource[i].productID}/`)
        .subscribe((data2: any) => {
          console.log("data2 : ", data2);
          data2.productID = this.dataSource[i].id;
          price += data2.price;
          this.products.push(data2);
          let numberAnimals = this.products.length; 
          this.orders.total_animals = numberAnimals;
          console.log("numberAnimals : ", numberAnimals);         
          if (i === this.dataSource.length - 1) {
            this.total_price = price;
            console.log("total : ", price);
            this.orders.total_price = price;
          }
        });
      }
    })
  }

  ngOnInit(): void {
    this.getCart();
  }

  openDialog() {
    const dialogRef = this.dialog.open(PopUpPaymentComponent, {
      data: {userID: this.orders.userID, price: this.orders.total_price, animal: this.orders.total_animals}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  deleteItem(id: number) {
    console.log(id);
    
    this.http.delete(`${environment.url}/shoppingcarts/${id}/`)
    .subscribe((data) => {
      console.log("data after ${environment.url}/shoppingcarts/${id}/ : ", data);
      window.location.reload();
    })
  }

}
