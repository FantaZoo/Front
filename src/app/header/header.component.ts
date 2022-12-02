import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isConnected: boolean = false;
  isAdmin: boolean = false;

  constructor(public router:Router) { }

  ngOnInit(): void {
    const storageUser = localStorage.getItem('user');
    if (storageUser) {
      this.isConnected = true;
    }
    const storageAdmin = localStorage.getItem('admin');
    if (storageAdmin) {
      this.isAdmin = true;
    }
  }

  logOut() {
    localStorage.clear();
    this.isConnected = false;
    if (this.isAdmin) {
      this.isAdmin = false;
    }
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}
