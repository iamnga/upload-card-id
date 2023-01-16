import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MobileCaptureCardIdComponent } from './mobile-capture-card-id/mobile-capture-card-id.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  {
    path: 'upload/:deviceid/:sessionid',
    component: MobileCaptureCardIdComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
