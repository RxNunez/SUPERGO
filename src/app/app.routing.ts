import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { ExploreComponent } from './explore/explore.component';
import { ProjectComponent } from './project/project.component';
import { AdminComponent } from './admin/admin.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'explore',
    component: ExploreComponent
  },
  {
    path: 'project',
    component: ProjectComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'projects/:id',
    component: ProjectDetailComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
