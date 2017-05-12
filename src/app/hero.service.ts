import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService{
	// getHero(): void{
		// return HEROES;
	// }
	
	getHeroes(): Promise<Hero[]> {
		return Promise.resolve(HEROES);
	}
	
	// filters the heroes list from getHeroes() by id
	getHero(id: number): Promise<Hero> {
		return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
	}
}