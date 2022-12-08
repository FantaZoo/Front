import { Component, OnInit } from '@angular/core';
import { Animals } from '../share/animals';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormCreateAnimalComponent } from '../form-create-animal/form-create-animal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {

  animals: Animals[] = [];

  isConnected: boolean = false;
  isAdmin: boolean = false;

  constructor(
    private http: HttpClient,
    private dialog: MatDialog
  ) { }

  getAnimals() {
    
    this.http.get<Animals[]>(`${environment.url}/animals/`)
      .subscribe((data) => {
        if (!this.isAdmin) {
          data.forEach((animal: any) => {
            if (animal.animal_status == "A VENDRE") {
              this.animals.push(animal);
            }
          });
        } else {
          this.animals = data;
        }
      });
  }

  ngOnInit(): void {
    const storageUser = localStorage.getItem('user');
    if (storageUser) {
      this.isConnected = true;
    }
    const storageAdmin = localStorage.getItem('admin');
    if (storageAdmin) {
      this.isAdmin = true;
    }

    this.getAnimals();
  }

  openDialog() {
    const dialogRef = this.dialog.open(FormCreateAnimalComponent);

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  delete(id: number){
    this.http.delete<Animals>(`${environment.url}/animals/` + id + '/')
    .subscribe((data)=>{
      this.getAnimals();
    })
  }
}
