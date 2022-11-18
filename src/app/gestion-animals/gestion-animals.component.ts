import { Component, OnInit } from '@angular/core';
import { Animals } from '../share/animals';
import { Diet } from '../share/diet';
import { Species } from '../share/species';

@Component({
  selector: 'app-gestion-animals',
  templateUrl: './gestion-animals.component.html',
  styleUrls: ['./gestion-animals.component.scss']
})
export class GestionAnimalsComponent implements OnInit {

  animals: Animals[] = [
    {
      name: 'Phoenix',
      image: 'https://imagizer.imageshack.com/a/img923/4374/IGrnJh.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.',
      price: 1000,
      status: {
        vendue: false,
        disponible: true
      },
      species: Species.Phoenix, 
      sexe: 'Femelle',
      age: 2,
      diet: Diet.Omnivore
    },
    {
      name: 'Dragon',
      image: './assets/squirrelswim.webp',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.',
      price: 1000,
      status: {
        vendue: false,
        disponible: true
      },
      species: Species.Dragon,
      sexe: 'Femelle',
      age: 2,
      diet: Diet.Carnivore
    },
    {
      name: 'Unicorn',
      image: './assets/squirrel.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.',
      price: 1000,
      status: {
        vendue: false,
        disponible: true
      },
      species: Species.Unicorn,
      sexe: 'Femelle',
      age: 2,
      diet: Diet.Herbivore
    },
    {
      name: 'Unicorn',
      image: './assets/squirrel.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.',
      price: 1000,
      status: {
        vendue: false,
        disponible: true
      },
      species: Species.Unicorn,
      sexe: 'Femelle',
      age: 2,
      diet: Diet.Herbivore
    },
    {
      name: 'Unicorn',
      image: './assets/squirrel.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.',
      price: 1000,
      status: {
        vendue: false,
        disponible: true
      },
      species: Species.Unicorn,
      sexe: 'Femelle',
      age: 2,
      diet: Diet.Herbivore
    },
  ];

  constructor() {}

  ngOnInit(): void {
  }

  deathAnimal(animal: Animals) {
    animal.status.disponible = false;
  }
}
