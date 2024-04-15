import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '@app/services/auth.service';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  
  const authService = inject(AuthService);
  const router = inject(Router);

  // if (authService.isAuthenticated()) {
  //   return true; // User is authenticated, allow access
  // } else {
  //   router.createUrlTree(['/login']);
  //   return false;
  // }


  return authService.isLoggedIn ? true : router.createUrlTree(['/login'])
};
