import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from './pokemon';
//import { POKEMONS } from './mock-pokemons';
import { PokemonsService } from './pokemons.service';

@Component({
  selector: 'list-pokemon',
  //template: `<h1>Hello youssef {{name}}</h1>`,
  templateUrl:"./app/pokemons/list-pokemon.component.html",
  //providers:[PokemonsService]
})
export class ListPokemonComponent implements OnInit  { 
  
  //name = 'Angular';

  private pokemons:Pokemon[]=null; 

  constructor(private router:Router,private pokemonsService : PokemonsService){}


  title:string = "Liste des pokémons"
  //value:string =''
  //values:string =''
  //beta:Number=900;

  ngOnInit(){
    //this.pokemons = POKEMONS;
    //this.pokemons = this.pokemonsService.getPokemons();
    this.pokemonsService.getPokemons().subscribe(pokemons=>this.pokemons=pokemons);
  }

  selectPokemon(pokemon:Pokemon){
    //alert("Vous avez cliqué sur "+pokemon.name);
    let link = ['/pokemon',pokemon.id];
    this.router.navigate(link);
  }

  /*
  onkey(value:string){
    this.value='bonjour '+value
  }
  */
}