import { Diet } from "./diet";
import { Species } from "./species";
import { TypeSpecies } from "./typeSpecies";

export class Animals {
    id!: number;
    animal_name!: string;
    image!: string;
    description!: string;
    price!: number;
    status!: string;
    species!: Species;
    sexe!: string;
    age!: number;
    diet!: Diet;
    typeSpecies!: TypeSpecies;
}