import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  heroe: any = {};
  imgHeroe: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroeService: HeroesService
  ) {
    //El params regresa un observador (algo pendiente de unos cambios)
    this.activatedRoute.params.subscribe((params) => {
      //Es id porque así lo puse en el route (Nuestra variable de heroes se carga)
      this.heroe = this.heroeService.getHeroe(params.id);
      if (this.heroe.casa == 'Marvel') {
        this.imgHeroe = 'assets/img/Marvel.png';
      } else {
        this.imgHeroe = 'assets/img/DC.png';
      }
    });
  }
}
