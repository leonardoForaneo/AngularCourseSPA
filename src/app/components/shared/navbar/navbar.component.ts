import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  //Esta funcion manda al heroe escrito en el navbar a busqueda.component
  buscarHeroe(termino: string) {
    this.router.navigate(['/busqueda', termino]);
  }
}
