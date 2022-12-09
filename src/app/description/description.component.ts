import { Component, OnInit } from '@angular/core';
import { Diet } from '../share/diet';
import { Species } from '../share/species';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ShoppingCart } from '../share/shoppingCart';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  href: string = this.router.url.split('/')[2];
  animal: any;
  sexe: string = "";
  alreadyInCart: boolean = true;
  isAdmin: boolean = false;
  isConnected: boolean = false;

  shoppingCart!: ShoppingCart;
  interval: any;
  isLoading: boolean = true;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {  
    const storageUser = localStorage.getItem('user');
    if (storageUser) {
      this.isConnected = true;
    }
    const storageAdmin = localStorage.getItem('admin');
    if (storageAdmin) {
      this.isAdmin = true;
    }  
    this.interval = setInterval(() => {
      if (this.animal !== 0){
        this.isLoading = false;
        let isInCart = false;
        this.http.get(`${environment.url}/animals/${this.href}/`)
          .subscribe((data) => {
            this.animal = data;
            this.sexe = this.animal.sexe === 'M' ? 'Mâle' : 'Femelle';
            this.http.get(`${environment.url}/shoppingcarts/?userID=${localStorage.getItem('user')}`).subscribe((data2: any) => {
              let i = 0;
              if (data2.length === 0) this.alreadyInCart = false;
              data2.forEach((element: any) => {
                if (element.productID == this.animal.id) isInCart = true;
                if (i === data2.length - 1) this.alreadyInCart = isInCart;
                i += 1;
              });
            });
          });
      } else {
        this.isLoading = true;
    }
  }, 1000);   
  }

  addToCart() {    
    const item = {
      productID: this.animal.id,
      userID: Number(localStorage.getItem('user')),
    }    
    this.http.post<ShoppingCart>(`${environment.url}/addtocart/`, item)
      .subscribe((data) => {
        alert("Animal ajouté au panier");
        window.location.reload();
      });
  }
}
