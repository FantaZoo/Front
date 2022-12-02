import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  mailConnexion: string = "";
  passwordConnexion: string = "";
  mailInscription: any = "";
  passwordInscription: string = "";
  passwordcheckInscription: string = "";
  firstname: string = "";
  lastname: string = "";
  phone: string = "";
  address: string = "";

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  signUp()
  {
    console.log('signup');
    if (!this.mailInscription || !this.passwordInscription || !this.passwordcheckInscription || !this.firstname || !this.lastname || !this.phone || !this.address) {
      console.log('Veuillez remplir toutes les informations');
    } else {
      if (this.passwordInscription !== this.passwordcheckInscription) {
        console.log('Les mots de passe ne correspondent pas');
      } else {
        console.log('inscription réussie');
        const user = {
          password: this.passwordInscription,
          email: this.mailInscription,
          firstname: this.firstname,
          lastname: this.lastname,
          phone_number: parseInt(this.phone, 10),
          address: this.address,
          is_admin: false
        }
        console.log(user);
        this.http.post(`${environment.url}/users/`, user)
          .subscribe((data) => {
            console.log(data);
            this.mailConnexion = "";
            this.passwordConnexion = "";
            this.mailInscription = "";
            this.passwordInscription = "";
            this.passwordcheckInscription = "";
            this.firstname = "";
            this.lastname = "";
            this.phone = "";
            this.address = "";
            alert('Inscription réussie, veuillez vous connecter.');
          });
      }
    }
  }

  logIn()
  {
    console.log('login');
    console.log(this.mailConnexion);
    console.log(this.passwordConnexion);
    this.http.get(`${environment.url}/users/?email=${this.mailConnexion}`)
          .subscribe((data: any) => {
            console.log(data);
            if (data === 0 || data > 1) {
              alert('Aucun utilisateur trouvé');
            } else {
              console.log(data[0].password);
              if (data[0].password !== this.passwordConnexion) {
                alert('Mot de passe incorrect');
              } else {
                const user = data[0];
                localStorage.setItem('user', JSON.stringify(user.id));
                if (user.is_admin) {
                  localStorage.setItem('admin', JSON.stringify(user.is_admin));
                  this.router.navigate(['/board-admin']).then(() => {
                    window.location.reload();
                  });
                } else {
                  console.log("test");
                  this.router.navigate(['/']).then(() => {
                    window.location.reload();
                  });
                }
              }
            }
          });
  }
}
