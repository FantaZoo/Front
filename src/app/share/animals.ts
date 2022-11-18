import { Diet } from "./diet";
import { Status } from "./status";
import { Species } from "./species";

export class Animals {
    id!: number;
    name!: string;
    image!: string;
    description!: string;
    price!: number;
    status!: string;
    species!: Species;
    sexe!: string;
    age!: number;
    diet!: Diet;
}