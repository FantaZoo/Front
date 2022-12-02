import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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

  constructor(private http: HttpClient, private formAnimal: AnimalForm) { }

  ngOnInit(): void {
    this.animals = this.formAnimal.createEmptyAnimal();
    console.log(this.animals);
  }

  create(){
    console.log(this.animals.value);
    this.http.post<Animals>(`${environment.url}/animals/`, this.animals.value)
      .subscribe((data) => {
        this.animal = data;
        console.log(data);
      }, (error) => {
        console.log(error);
      });
  }
}
