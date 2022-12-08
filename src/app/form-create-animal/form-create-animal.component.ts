import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AnimalForm } from '../forms/animal.form';
import { Animals } from '../share/animals';

@Component({
  selector: 'app-form-create-animal',
  templateUrl: './form-create-animal.component.html',
  styleUrls: ['./form-create-animal.component.scss'],
  providers: [AnimalForm]
})
export class FormCreateAnimalComponent implements OnInit {

  animal : Animals = new Animals();
  animals!: FormGroup;

  constructor(private http: HttpClient, private formAnimal: AnimalForm, private router: Router) { }

  ngOnInit(): void {
    this.animals = this.formAnimal.createEmptyAnimal();
  }

  create(){
    this.http.post<Animals>(`${environment.url}/animals/`, this.animals.value)
      .subscribe((data) => {
        this.animal = data;
        this.router.navigate(['/']).then(() => {
          window.location.reload();
        });
      }, (error) => {
        console.log(error);
      });
  }
}
