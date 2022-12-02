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

  shoppingCart!: ShoppingCart;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    console.log("url : ", `${environment.url}/animals/${this.href}/`);
    
    this.http.get(`${environment.url}/animals/${this.href}/`)
      .subscribe((data) => {
        console.log(data);
        this.animal = data;
        this.sexe = this.animal.sexe === 'M' ? 'Mâle' : 'Femelle';
        console.log(this.animal);

      });
    
  }

  addToCart() {
    this.shoppingCart = new ShoppingCart();
    this.shoppingCart.productID.id = this.animal.id;
    this.shoppingCart.userID.id = Number(localStorage.getItem('user'));
    this.http.post<ShoppingCart>(`${environment.url}/shoppingcarts/`, this.shoppingCart.userID && this.shoppingCart.productID)
      .subscribe((data) => {
        this.shoppingCart = data;
        console.log(data);
      });
  }

}
