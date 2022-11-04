import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicOperationComponent } from './basic-operation/basic-operation.component';
import { UserformComponent } from './userform/userform.component';

const routes: Routes = [
  { path: "basic-operation", component: BasicOperationComponent },
  { path: "userform", component: UserformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
