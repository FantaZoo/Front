import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { FormCreateUserComponent } from '../form-create-user/form-create-user.component';

@Component({
  selector: 'app-gestion-users',
  templateUrl: './gestion-users.component.html',
  styleUrls: ['./gestion-users.component.scss']
})
export class GestionUsersComponent implements OnInit {

  users = [
    {
      firstname: 'Olivier',
      lastname: 'Blaivie',
      email: 'olivier.blaivie@ynov.com',
      adresse : '2 place de l\'Europe 31000 Toulouse',
      tel: '06 00 00 00 00',
      cart: false
    },
    {
      firstname: 'Julien',
      lastname: 'Ferrand',
      email: 'julien.ferrand@ynov.com',
      adresse : '5 place de l\'Europe 31000 Toulouse',
      tel: '07 00 00 00 00',
      cart: false
    },
  ]

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(FormCreateUserComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
