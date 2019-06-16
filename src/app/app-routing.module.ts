import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: './login/login.module#LoginPageModule'},
  {path: 'areas', loadChildren: './areas/areas.module#AreasPageModule'},
  {path: 'begin', loadChildren: './begin/begin.module#BeginPageModule'}, {
    path: 'experiments',
    loadChildren: './experiments/experiments.module#ExperimentsPageModule'
  },
  {
    path: 'checklist',
    loadChildren: './checklist/checklist.module#ChecklistPageModule'
  },
  {path: 'login', loadChildren: './login/login.module#LoginPageModule'}, {
    path: 'tutorial',
    loadChildren: './tutorial/tutorial.module#TutorialPageModule'
  }
];
@NgModule({
  imports:
      [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}