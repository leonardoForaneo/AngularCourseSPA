import { Component, OnInit } from '@angular/core';
//Necesario para recibir parámetros
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent implements OnInit {
  heroes: Heroe[] = [];
  nombre = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroeService: HeroesService,
    private router: Router
  ) {}
  //Aquí recibimos los parametros (termino) y los enviamos a la funcion search que retorna un arrayHeroes
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.heroes = this._heroeService.searchHeroes(params['id']);
      this.nombre = params['id'];
    });
  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }
}
