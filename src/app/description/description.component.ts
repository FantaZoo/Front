import { Component, OnInit } from '@angular/core';
import { Diet } from '../share/diet';
import { Species } from '../share/species';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  href: string = this.router.url.split('/')[2];
  
  // animal = {
  //   id: 1,
  //   animal_name: 'Phoenix',
  //   image: 'https://imagizer.imageshack.com/a/img923/4374/IGrnJh.png',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.',
  //   price: 1000,
  //   status: "Disponible",
  //   species: Species.Phoenix, 
  //   sexe: 'Femelle',
  //   age: 2,
  //   diet: Diet.Omnivore
  // };

  animal: any;

  // dataToDisplay = [
  //   {name: 'Age', value: this.animal.age},
  //   {name: 'Sexe', value: this.animal.sexe},
  //   {name: 'Régime', value: this.animal.diet},
  //   {name: 'Statut', value: this.animal.status},
  //   {name: "Prix", value: this.animal.price}
  // ]

  sexe: string = "";

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
    console.log('add to cart')
    const item = {
      userID: 1,
      productID: parseInt(this.href, 10),
    }
    console.log(item);
    
  }

}
