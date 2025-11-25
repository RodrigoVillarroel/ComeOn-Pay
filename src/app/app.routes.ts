import { Routes } from '@angular/router';
import { RegisterUserComponent } from './users/components/register-user-component/register-user-component';

export const routes: Routes = [
    {
        path : '',
        component : RegisterUserComponent
    },
    {
        path : 'register',
        component : RegisterUserComponent
    }
];
