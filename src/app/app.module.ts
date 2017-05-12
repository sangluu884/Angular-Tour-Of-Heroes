import { BrowserModule } 	from '@angular/platform-browser';
import { NgModule } 		from '@angular/core';
import { FormsModule } 		from '@angular/forms';
import { HttpModule } 		from '@angular/http';
import { RouterModule }   from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } 		from './app.component';
import { HeroDetailComponent } 	from './hero-detail.component';
import { HeroesComponent }     	from './heroes.component';
import { HeroService }         	from './hero.service';
import { DashboardComponent }   from './dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
	HeroDetailComponent,
	HeroesComponent,
	DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
	// RouterModule.forRoot([
		// {
		  // path: '',
		  // redirectTo: '/dashboard',
		  // pathMatch: 'full'
		// },
		// {
			// path:'heroes',
			// component:HeroesComponent
		// },
		// {
			// path: 'dashboard',
			// component: DashboardComponent
		// },
		// {
			// path: 'detail/:id',
			// component: HeroDetailComponent
		// }
	// ]),
	//InMemoryWebApiModule.forRoot(InMemoryDataService),
	AppRoutingModule,
    HttpModule
  ],
  providers: [
	HeroService
  ],
  bootstrap: [
	AppComponent
	//Hero
  ]
})
export class AppModule { }
