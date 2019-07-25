import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './_services/api.service';
import { SessionService } from './_services/session.service';

@Injectable()
export class ProfileGuard implements CanActivate {

    constructor(private apiService: ApiService,
                private sessionService: SessionService,
                private router: Router) {

        this.apiService.apiInit();
    }

    public canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {

        if (!this.sessionService.getSessionStatus()) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
}
