import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenu } from '@angular/material/menu';
import { MatMenuItem } from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatIconButton,
    MatIcon,
    MatMenu,
    MatMenuItem,
    MatToolbarModule,
    MatButtonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  numeroDeProductos :number = 0;
  perfil: string = " My Perfil";

}
