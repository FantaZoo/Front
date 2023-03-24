# Documentation FRONT Fantazoo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.7.

## Pour lancer le Projet

Run `npm install` to install dependencies then `ng serve` to launch the dev server.
The website will run at `http://localhost:4200/`.

## Users

Every type of user can create an account and sign in.
There a three types of users :

### The visitors

They are not connected. They can see the animals list if they are not sold yet and have access to the connection page.

### The administrators

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

### The buyers

They can :
    see the list of available animals
    see description of each animals
    add an animal to the cart
    access cart page
    from cart page, they can place an order












#DOCKER

###Prérequis : 
Faire un build de l'app : 
```
npm run build
```

###1-Dockerfile

###2-Builder l'image
```
docker build -t benoitbelloc/fantazoo-front .
```
###3-Vérification du buildage
```
docker images
```
