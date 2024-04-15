import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const excludedUrls = [
    '/v1/login',
  ];

  const isExcluded = excludedUrls.some(url => new RegExp(url).test(req.url));

  if (isExcluded) {
    return next(req);
  }

  const authService = inject(AuthService);

  var authToken = authService.getToken;

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`
    }
  });


  return next(authReq);
};
