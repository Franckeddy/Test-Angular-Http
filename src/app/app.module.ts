import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MyComponentComponent} from './my-component/my-component.component';
import {FormsModule} from '@angular/forms';
import {DeviceComponent} from './device/device.component';

import {DeviceService} from './services/device.service';
import {AuthComponent} from './auth/auth.component';
import {DeviceViewComponent} from './device-view/device-view.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthServices} from './services/auth.services';
import { SingleDeviceComponent } from './single-device/single-device.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import {AuthGuard} from './services/auth-guard.service';

const appRoutes: Routes = [
  { path: 'devices', canActivate: [AuthGuard], component: DeviceViewComponent },
  { path: 'devices/:id', canActivate: [AuthGuard], component: SingleDeviceComponent},
  { path: 'auth', component: AuthComponent },
  { path: '', component: DeviceViewComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: '/not-found'}  // path wild-card à la fin, Angular fonctionne par ordre
];

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    DeviceComponent,
    AuthComponent,
    DeviceViewComponent,
    SingleDeviceComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DeviceService,
    AuthServices,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
