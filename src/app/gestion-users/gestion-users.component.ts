import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { User } from '../share/user';

@Component({
  selector: 'app-gestion-users',
  templateUrl: './gestion-users.component.html',
  styleUrls: ['./gestion-users.component.scss']
})
export class GestionUsersComponent implements OnInit {

  users : User[] = []; 

  constructor(public dialog: MatDialog,
    private http: HttpClient) { }

  getUsers(){
    this.http.get<User[]>(`${environment.url}/users/`)
    .subscribe((data) => {
      this.users = data;
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }

  delete(id: number){
    this.http.delete<User[]>(`${environment.url}/users/` + id + '/')
    .subscribe((data)=>{
      this.getUsers();
    })
  }
}
