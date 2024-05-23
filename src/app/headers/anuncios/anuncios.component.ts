import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Idiomas } from '../../interfaces-utils/idiomas';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-anuncios',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule,
    MatMenuModule, MatButtonModule
  ],
  templateUrl: './anuncios.component.html',
  styleUrl: './anuncios.component.css'
})
export class AnunciosComponent {

  selected = 'es';

  idiomasList : Idiomas[] = [ 
  {value: 'es', viewValue: 'Español' },
  {value: 'en', viewValue: 'English' }, 
];



}
