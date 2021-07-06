import { Component, OnInit } from '@angular/core';
//Llamamos a la clase y la interface
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];
  //Dispara el constructor del servicio
  constructor(private _heroesService: HeroesService, private router: Router) {}

  //Es bastante utilizado cuando la pagina esta renderizada
  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
    //console.log(this.heroes);
  }
  //función que nos manda al componente heroe con el parametro
  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }
}
