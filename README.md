<h1>Documentation FRONT Fantazoo</h1>

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.7.

# Pour lancer le Projet

Run `npm install` to install dependencies then `ng serve` to launch the dev server.

<h4>Navigate to `http://localhost:4200/`.

<h2>Users</h2>

Every type of user can create an account and sign in.
There a three types of users :

<h4>The visitors</h4>

They are not connected. They can see the animals list if they are not sold yet and have access to the connection page.

<h4>The administrators</h4>

They can :
    see the full list of animals (sold and available)
    see description of each animals
    create new animals
    delete animals if they die
    see the list of users
    delete users

They can't buy animals (they will need a normal user account).

There is one administrator by default :
    login: admin@mail.com
    password: admin

<h4>The buyers</h4>

They can :
    see the list of available animals
    see description of each animals
    add an animal to the cart
    access cart page
    from cart page, they can place an order






