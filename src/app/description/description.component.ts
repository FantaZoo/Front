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

  shoppingCart!: ShoppingCart;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {    
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
