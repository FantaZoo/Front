import { Component, OnInit } from '@angular/core';
import { Diet } from '../share/diet';
import { Species } from '../share/species';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  animal = {
    id: 1,
    name: 'Phoenix',
    image: 'https://imagizer.imageshack.com/a/img923/4374/IGrnJh.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.',
    price: 1000,
    status: "Disponible",
    species: Species.Phoenix, 
    sexe: 'Femelle',
    age: 2,
    diet: Diet.Omnivore
  };

  dataToDisplay = [
    {name: 'Age', value: this.animal.age},
    {name: 'Sexe', value: this.animal.sexe},
    {name: 'Régime', value: this.animal.diet},
    {name: 'Statut', value: this.animal.status},
    {name: "Prix", value: this.animal.price}
  ]

  constructor() { }

  ngOnInit(): void {
    console.log(this.animal)
    
  }

}
