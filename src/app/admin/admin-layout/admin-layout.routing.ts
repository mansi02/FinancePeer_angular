import { Routes } from '@angular/router';

import { DashboardComponent } from 'app/admin/dashboard/dashboard.component';
import { RegisterComponent } from 'app/auth/register/register.component';
import { NotificationsComponent } from '../../notifications/notifications.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
];
