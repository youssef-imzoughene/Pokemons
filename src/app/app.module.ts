import { NgModule }  from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { PokemonsModule } from './pokemons/pokemons.module';

import { InMemoryDataService } from './in-memory-data.service';


import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent }  from './app.component';
//import { ListPokemonComponent }  from './pokemons/list-pokemon.component';
//import { DetailPokemonComponent }  from './pokemons/detail-pokemon.component';
import { PageNotFoundComponent } from './page-not-found.component';

//import { BorderCardDirective }  from './pokemons/border-card.directive';

//import { PokemonTypeColorPipe} from './pokemons/pokemon-type-color.pipe'

@NgModule({
  imports:      [ BrowserModule ,
                  HttpClientModule,
                  FormsModule,
                  HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{dataEncapsulation:false}),
                  PokemonsModule,
                  LoginRoutingModule,
                  AppRoutingModule,
                 
                  
                ],
  declarations: [ AppComponent,
                  //BorderCardDirective,
                  //PokemonTypeColorPipe,
                  //ListPokemonComponent,
                  //DetailPokemonComponent,
                  PageNotFoundComponent,
                  LoginComponent,
                  
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }