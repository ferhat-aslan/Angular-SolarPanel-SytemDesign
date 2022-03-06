import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PanelResultComponent } from './panel-result/panel-result.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {path:'panelresult', component:PanelResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
