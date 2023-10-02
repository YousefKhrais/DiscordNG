import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserSettingsComponent } from './components/settings/user-settings/user-settings.component';
import { DirectMessageComponent } from './components/direct-message/direct-message.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'settings/user/account', component: UserSettingsComponent},
  {path: 'channels/@me', component: DirectMessageComponent}

  // { path: 'error', component: ErrorComponent },
  // { path: '**', component: FormLibraryComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }