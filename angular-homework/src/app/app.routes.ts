import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QuestionCategoryListComponent } from './question-category-list/question-category-list.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'category', component: QuestionCategoryListComponent , canActivate: [authGuard] },
];
