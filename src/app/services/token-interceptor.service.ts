import { Injectable } from "@angular/core";
import { HttpInterceptor } from "@angular/common/http";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req, next) {
    const tokenizeReq=
    req.clone({
      setHeaders: {
        authorization: `Bearer ${this.authService.getToken()}`,
      },
    });

    return next.handle(tokenizeReq);
  }
}
