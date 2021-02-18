import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrollListComponent } from './enroll-list/enroll-list.component'
import { EnrollDetailsComponent } from './enroll-details/enroll-details.component'

const routes: Routes = [
  { path: '', component: EnrollListComponent },
  { path: 'enroll-details/:id', component: EnrollDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
