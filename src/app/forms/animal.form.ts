import { Injectable } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Animals } from "../share/animals";

@Injectable()
export class AnimalForm {
    constructor(private formBuilder: FormBuilder) { }
    createForm(animal : Animals){
        return this.formBuilder.group({
            animal_name: [animal.animal_name, Validators.required],
            image: [animal.image],
            description: [animal.description],
            price: [animal.price],
            status: [animal.status],
            species: [animal.species],
            sexe: [animal.sexe],
            age: [animal.age],
            diet: [animal.diet],
            typeSpecies: [animal.typeSpecies]
        });
    }

    createEmptyAnimal(){
        return this.formBuilder.group({
            animal_name: [''],
            image: [''],
            description: [''],
            price: [0],
            status: ['A VENDRE'],
            species: [''],
            sexe: [''],
            age: [2],
            diet: [''],
            typeSpecies: ['']
        });
    }
}
