import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PokemonRoutingModule } from './pokemons-routing.module';
import { PokemonsService } from './pokemons.service';

import { ListPokemonComponent } from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon.component';
import { PokemonFormComponent } from './pokemon-form.component';
import { PokemonSearchComponent } from './search-pokemon.component';
import { LoaderComponent } from './loader.component';

import { AuthGuard } from '../auth-guard.service';

import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';



@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		PokemonRoutingModule,
		
	],
	declarations: [
		ListPokemonComponent,
		DetailPokemonComponent,
		EditPokemonComponent,
		PokemonFormComponent,
		PokemonSearchComponent,
		BorderCardDirective,
		LoaderComponent,
		PokemonTypeColorPipe
	],
	providers:[PokemonsService,AuthGuard]
})
export class PokemonsModule { }