import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//components
import { TasksComponent } from "./components/tasks/tasks.component";
import { PrivateTasksComponent } from "./components/private-tasks/private-tasks.component";
import { SignupComponent } from "./components/signup/signup.component";
import { SigninComponent } from "./components/signin/signin.component";

import { AuthGuard } from './auth.guard';
import { AddTutorialComponent } from './components/tutorial/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial/tutorial-details/tutorial-details.component';
import { TutorialListComponent } from './components/tutorial/tutorial-list/tutorial-list.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "tasks",
    pathMatch: "full",
  },
  {
    path: "tasks",
    component: TasksComponent,
  },

  {
    path: "private",
    component: PrivateTasksComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "signup",
    component: SignupComponent,
  },
  {
    path: "signin",
    component: SigninComponent,
  },
  { path: 'tutorials', component: TutorialListComponent, canActivate:[AuthGuard]},
  { path: 'tutorials/:id', component: TutorialDetailsComponent, canActivate:[AuthGuard]},
  { path: 'add', component: AddTutorialComponent, canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
