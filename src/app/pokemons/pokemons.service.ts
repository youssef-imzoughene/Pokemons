import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';




import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';




@Injectable()
export class PokemonsService {



    constructor(private http: HttpClient) { }
    private pokemonsUrl = 'api/pokemons';

    // Retourne tous les pokémons
    /*getPokemons(): Pokemon[] {
      return POKEMONS;
    }*/
    /** GET pokemons */
    getPokemons(): Observable<Pokemon[]> {
      return this.http.get<Pokemon[]>(this.pokemonsUrl).pipe(
        tap(_ => this.log(`fetched pokemons`)),
        catchError(this.handleError('getPokemons', []))
      );
    }
    
    // Retourne le pokémon avec l'identifiant passé en paramètre
    /*getPokemon(id: number): Pokemon {
      let pokemons = this.getPokemons();
    
      for(let index = 0; index < pokemons.length; index++) {
        if(id === pokemons[index].id) {
          return pokemons[index];
        }
      }
    }*/


    getPokemonTypes():string[]{
      return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
			'Poison', 'Fée', 'Vol', 'Combat', 'Psy'];
    }


    /* handleError */
	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);
			console.log(`${operation} failed: ${error.message}`);

			return of(result as T);
		};
	}

	/* log */
	private log(log: string) {
		console.info(log);
  }
  
  /** GET pokemon */
	getPokemon(id: number): Observable<Pokemon> {
		const url = `${this.pokemonsUrl}/${id}`;

		return this.http.get<Pokemon>(url).pipe(
			tap(_ => this.log(`fetched pokemon id=${id}`)),
			catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
		);
  }
  

  /** PUT: update the pokemon on the server */
	updatePokemon(pokemon: Pokemon): Observable<any> {
		const httpOptions = {
			headers: new HttpHeaders({ 'Content-Type': 'application/json' })
		};

		return this.http.put(this.pokemonsUrl, pokemon, httpOptions).pipe(
			tap(_ => this.log(`updated pokemon id=${pokemon.id}`)),
			catchError(this.handleError<any>('updatePokemon'))
		);
  }
  

  /** DELETE pokemon */
	deletePokemon(pokemon: Pokemon): Observable<Pokemon> {
		const url = `${this.pokemonsUrl}/${pokemon.id}`;
		const httpOptions = {
			headers: new HttpHeaders({ 'Content-Type': 'application/json' })
		};

		return this.http.delete<Pokemon>(url, httpOptions).pipe(
			tap(_ => this.log(`deleted pokemon id=${pokemon.id}`)),
			catchError(this.handleError<Pokemon>('deletePokemon'))
		);
	}



	/* GET pokemons search */
	searchPokemons(term: string): Observable<Pokemon[]> {
		if (!term.trim()) {
			// si le terme de recherche n'existe pas, on renvoie un tableau vide.
			return of([]);
		}

		return this.http.get<Pokemon[]>(`${this.pokemonsUrl}/?name=${term}`).pipe(
			tap(_ => this.log(`found pokemons matching "${term}"`)),
			catchError(this.handleError<Pokemon[]>('searchPokemons', []))
		);
	}
}