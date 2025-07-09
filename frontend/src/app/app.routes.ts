import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { FormComponent } from './pages/form/form.component';
import { DetailsComponent } from './pages/details/details.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'register',
        component:RegisterComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'form',
        component:FormComponent
    },
    {
        path:'details/:id',
        component:DetailsComponent
    },
];
