import { Component, inject, computed, effect } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { AuthStatus } from './auth/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'authApp';
  private _authService = inject(AuthService);
  private _router = inject(Router);
  public finishedAuthCheck = computed<boolean>( () => {
    if(this._authService.authStatus() === AuthStatus.checking){
      return false;
    }

    return true;
  });

  public authStatusChangedEffect = effect( () => {
    switch(this._authService.authStatus()){
      case AuthStatus.checking:
        return;
      case AuthStatus.authenticated:
        this._router.navigateByUrl('/dashboard');
        return;
      case AuthStatus.notAuthenticaded:
        this._router.navigateByUrl('/auth/login');
        return;
    }
  }) 
}
