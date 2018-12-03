import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPokemonComponent }    from './list-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon.component';
import { DetailPokemonComponent }  from './detail-pokemon.component';
import { AuthGuard } from '../auth-guard.service';

// les routes du module Pokémon

/*
const pokemonsRoutes: Routes = [
	{ path: 'pokemons', component: ListPokemonComponent },
	{ path: 'pokemon/edit/:id', component: EditPokemonComponent ,canActivate:[AuthGuard]},
	{ path: 'pokemon/:id', component: DetailPokemonComponent }
];
*/

const pokemonsRoutes: Routes = [
	{
		path: 'pokemon',
		canActivate: [AuthGuard],
		children: [
			{ path: 'list', component: ListPokemonComponent },
			//{ path: 'add', component: AddPokemonComponent },
			{ path: 'edit/:id', component: EditPokemonComponent },
			{ path: ':id', component: DetailPokemonComponent }
		]
	}
];
@NgModule({
	imports: [
		RouterModule.forChild(pokemonsRoutes)
	],
	exports: [
		RouterModule
	]
})
export class PokemonRoutingModule { }