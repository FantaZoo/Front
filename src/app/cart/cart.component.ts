import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpPaymentComponent } from '../pop-up-payment/pop-up-payment.component';

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
  dataSource: any;


  constructor(public dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(PopUpPaymentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}


