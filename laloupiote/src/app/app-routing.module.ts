import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importation des composants du site principale
// J'ai (Audren) modifié le chemin des imports car tout était en rouge
// ancien liens : import { FormComponent } from 'src/app/components/form/form.component';

import { FormComponent } from './components/form/form.component';
import { NosmenusComponent } from './components/nosmenus/nosmenus.component';
import { MenusAnglaisComponent } from './components/menus-anglais/menus-anglais.component';
import { HomeComponent } from './components/home/home.component';
import { HorairesComponent } from './components/horaires/horaires.component';
import { LocalisationComponent }from './components/localisation/localisation.component';
import { MentionsLegalesComponent } from './components/mentions-legales/mentions-legales.component';

// Importation des composants de la partie admin
import { AdminLoginComponent} from './components/admin-login/admin-login.component';
import { AdminHorairesComponent} from './components/admin-horaires/admin-horaires.component';
import { AdminSettingComponent} from './components/admin-setting/admin-setting.component' ;
import { AdminNosmenusComponent } from './components/admin-nosmenus/admin-nosmenus.component';
import { AdminCarouselComponent} from './components/admin-carousel/admin-carousel.component';
import { AdminInfoComponent} from './components/admin-info/admin-info.component';
import { AdminArticleComponent} from './components/admin-article/admin-article.component';
import { AdminBoissonComponent} from './components/admin-boisson/admin-boisson.component';
import { AdminMenuAnglaisComponent} from './admin-menu-anglais/admin-menu-anglais.component';

const routes: Routes = [
	{path: '', redirectTo: '/accueil', pathMatch: 'full'},
  {path: 'accueil', component: HomeComponent, pathMatch: 'full'},
 	{path: 'contact', component: FormComponent, pathMatch: 'full'},
	{path: 'nosmenus', component: NosmenusComponent, pathMatch: 'full'},
	{path: 'menusAnglais', component: MenusAnglaisComponent, pathMatch: 'full'},
	{path: 'horaires', component: HorairesComponent, pathMatch: 'full'},
	{path: 'localisation', component: LocalisationComponent, pathMatch: 'full'},
	{path: 'cgu', component: MentionsLegalesComponent, pathMatch: 'full'},

	{path: 'adminlogin', component: AdminLoginComponent, pathMatch: 'full'},
	{path: 'adminsetting', component: AdminSettingComponent, pathMatch: 'full'},
	{path: 'editeopeningtime', component: AdminHorairesComponent, pathMatch: 'full'},
	{path: 'editemenu', component: AdminNosmenusComponent, pathMatch: 'full'},
	{path: 'editecarousel', component: AdminCarouselComponent, pathMatch: 'full'},
	{path: 'editeinformations', component: AdminInfoComponent, pathMatch: 'full'},
	{path: 'editearticle', component: AdminArticleComponent, pathMatch: 'full'},
	{path: 'editeboisson', component: AdminBoissonComponent, pathMatch: 'full'},
	{path: 'editeMenuAnglais', component: AdminMenuAnglaisComponent, pathMatch: 'full'}

	
];

@NgModule({

//   imports: [RouterModule.forRoot(routes, {anchorScrolling:'enabled', scrollPositionRestoration:'enabled'})],
  // imports: [RouterModule.forRoot(routes, {useHash: false, anchorScrolling:"enabled", scrollPositionRestoration:"enabled"})],


//   imports: [RouterModule.forRoot(routes, {anchorScrolling:'enabled', scrollPositionRestoration:'enabled'})],
  // imports: [RouterModule.forRoot(routes, {useHash: false, anchorScrolling:"enabled", scrollPositionRestoration:"enabled"})],

  imports: [
	  RouterModule.forRoot(routes, {
		scrollPositionRestoration: 'enabled',
		anchorScrolling: 'enabled',
		scrollOffset: [0, 64] // [x, y]
		})
	],

//   imports: [RouterModule.forRoot(routes, {useHash: true})],


//   imports: [RouterModule.forRoot(routes, {anchorScrolling:'enabled', scrollPositionRestoration:'enabled'})],
  // imports: [RouterModule.forRoot(routes, {useHash: false, anchorScrolling:"enabled", scrollPositionRestoration:"enabled"})],

//   imports: [RouterModule.forRoot(routes, {useHash: true})],


  exports: [RouterModule]
})
export class AppRoutingModule { }
