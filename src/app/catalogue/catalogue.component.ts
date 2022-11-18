import { Component, OnInit } from '@angular/core';
import { Animals } from '../share/animals';
import { Diet } from '../share/diet';
import { Species } from '../share/species';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {

  animals: Animals[] = [
    {
      id: 1,
      name: 'Phoenix',
      image: 'https://imagizer.imageshack.com/a/img923/4374/IGrnJh.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.',
      price: 1000,
      status: 'Disponible',
      species: Species.Phoenix, 
      sexe: 'Femelle',
      age: 2,
      diet: Diet.Omnivore
    },
    {
      id: 2,
      name: 'Dragon',
      image: './assets/squirrelswim.webp',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.',
      price: 1000,
      status: 'Disponible',
      species: Species.Dragon,
      sexe: 'Femelle',
      age: 2,
      diet: Diet.Carnivore
    },
    {
      id: 3,
      name: 'Unicorn',
      image: './assets/squirrel.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.',
      price: 1000,
      status: 'Disponible',
      species: Species.Unicorn,
      sexe: 'Femelle',
      age: 2,
      diet: Diet.Herbivore
    },
    {
      id: 4,
      name: 'Unicorn',
      image: './assets/squirrel.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.',
      price: 1000,
      status: 'Disponible',
      species: Species.Unicorn,
      sexe: 'Femelle',
      age: 2,
      diet: Diet.Herbivore
    },
    {
      id: 5,
      name: 'Unicorn',
      image: './assets/squirrel.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.',
      price: 1000,
      status: 'Disponible',
      species: Species.Unicorn,
      sexe: 'Femelle',
      age: 2,
      diet: Diet.Herbivore
    },
  ];

  constructor() { }

  ngOnInit(): void {}

}
