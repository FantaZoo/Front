import { Animals } from "./animals";
import { User } from "./user";

export class ShoppingCart {
    id!: number;
    userID!: User;
    productID!: Animals;
}