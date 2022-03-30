import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {PlaceSwipperComponent} from "./place-swipper/place-swipper.component";
import {AuthGuardService} from "./auth-guard.service";

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'mainpage', component: PlaceSwipperComponent, canActivate: [AuthGuardService]},
  {path: '**', component: LoginComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
