import { Diet } from "./diet";
import { Status } from "./status";
import { Species } from "./species";

export class Animals {
    name!: string;
    image!: string;
    description!: string;
    price!: number;
    status!: Status;
    species!: Species;
    sexe!: string;
    age!: number;
    diet!: Diet;
}