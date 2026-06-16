import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'experience', loadComponent: () => import('./components/experience/experience').then(m => m.Experience) },
    //{ path: 'projects', loadComponent: () => import('./components/projects/projects').then(m => m.Projects) },
];
