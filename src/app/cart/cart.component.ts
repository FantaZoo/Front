import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { PopUpPaymentComponent } from '../pop-up-payment/pop-up-payment.component';
import { ShoppingCart } from '../share/shoppingCart';

export interface Cart{
  id: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  displayedColumns: string[] = ['nom', 'quantite', 'prix', 'action'];
  dataSource!: any;
  products!: any;

  constructor(public dialog: MatDialog,
    private http: HttpClient) { }

  ngOnInit(): void {
    // const userid = Number(localStorage.getItem('user'));
    // this.http.get(`${environment.url}/shoppingcarts/?userID=${userid}`)
    // .subscribe((data) => {
    //   this.dataSource = data;
    //   console.log(data);
    //   for (let i = 0; i < this.dataSource.length; i++) {
    //     this.http.get(`${environment.url}/animals/${this.dataSource[i].productID}`)
    //     .subscribe((data2) => {
    //       this.products.push(data2);
    //     });
    //   }
    // });
    // console.log(this.products);
    
  }

  openDialog() {
    const dialogRef = this.dialog.open(PopUpPaymentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}


