import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QuestionCategoryListComponent } from './question-category-list/question-category-list.component';
import { authGuard } from './guards/auth.guard';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';

export const routes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'category', component: QuestionCategoryListComponent , canActivate: [authGuard] },
    { path: 'questionnaire/:id', component: QuestionnaireComponent , canActivate: [authGuard] },
    { path: '**', redirectTo: 'category', pathMatch: 'full' }
];
