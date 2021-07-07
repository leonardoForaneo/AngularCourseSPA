import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

//Rutas
import { APP_ROUTING } from './app.routes';
//Servicios
import { HeroesService } from './services/heroes.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BusquedaComponent,
  ], //Las rutas van en los imports
  imports: [BrowserModule, APP_ROUTING],
  //Aquí van todos los servicios
  providers: [HeroesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
