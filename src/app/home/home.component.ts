import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isAdmin: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const storageAdmin = localStorage.getItem('admin');
    if (storageAdmin) {
      this.isAdmin = true;
      this.router.navigate(['/board-admin']).then(() => {
        window.location.reload();
      });
    } else {
      this.router.navigate(['/list']).then(() => {
        window.location.reload();
      });
    }
  }

}
