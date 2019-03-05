import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormComponent } from './components/form/form.component';
import { NosmenusComponent } from './components/nosmenus/nosmenus.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HorairesComponent } from './components/horaires/horaires.component';
import { ContactComponent } from './components/contact/contact.component';
import { ActualiteComponent } from './components/actualite/actualite.component';
import { LocalisationComponent } from './components/localisation/localisation.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminInfoComponent } from './components/admin-info/admin-info.component';
import { AdminHorairesComponent } from './components/admin-horaires/admin-horaires.component';
import { AdminNosmenusComponent } from './components/admin-nosmenus/admin-nosmenus.component';
import { AdminCarouselComponent } from './components/admin-carousel/admin-carousel.component';
import { AdminSettingComponent } from './components/admin-setting/admin-setting.component';
import { AdminArticleComponent } from './components/admin-article/admin-article.component';
import { AdminBoissonComponent } from './components/admin-boisson/admin-boisson.component';


import { NosmenusService } from "./services/nosmenus.service";
import { HorairesService } from '../app/services/horaires.service';
import { FormService } from '../app/services/form.service';
import { BoissonService } from '../app/services/boisson.service';
import { CategoryBoissonService } from 'src/app/services/category-boisson.service';
import { BoissonsPipe } from 'src/app/Pipes/boissons.pipe';
import { CategoryNosmenusService } from './services/category-nosmenus.service';
import { NosmenusPipe } from 'src/app/Pipes/nosmenus.pipe';
import { InfoContactService } from './services/info-contact.service';
import { ArticleService } from '../app/services/article.service';
import { CarouselService } from './services/carousel.service';
import { MenusAnglaisComponent } from './components/menus-anglais/menus-anglais.component';
import { MenusAnglaisPipe } from './Pipes/menus-anglais.pipe';
import { AdminMenuAnglaisComponent }from 'src/app/admin-menu-anglais/admin-menu-anglais.component';
import { MenusAnglaisService } from 'src/app/services/menus-anglais.service';
import { NavbarService } from './services/navbar.service';
import { UserService } from './services/user.service';
import { MentionsLegalesComponent } from './components/mentions-legales/mentions-legales.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavbarComponent,
    NosmenusComponent,
    HomeComponent,
    FooterComponent,
    HorairesComponent,
    ContactComponent,
    ActualiteComponent,
    LocalisationComponent,
    AdminLoginComponent,
    AdminInfoComponent,
    AdminHorairesComponent,
    AdminNosmenusComponent,
    AdminCarouselComponent,
    AdminSettingComponent,
    AdminArticleComponent,
    BoissonsPipe,
    NosmenusPipe,
    AdminBoissonComponent,
    MenusAnglaisComponent,
    MenusAnglaisPipe,
    AdminMenuAnglaisComponent,
    MentionsLegalesComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [
    HorairesService,
    CategoryBoissonService,
    CategoryNosmenusService,
    InfoContactService,
    ArticleService,
    CarouselService,
    FormService,
    BoissonService,
    NosmenusService,
    MenusAnglaisService,
    NavbarService,
    UserService
   ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
