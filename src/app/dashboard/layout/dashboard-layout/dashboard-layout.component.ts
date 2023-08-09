import { Component, inject, computed } from '@angular/core';
import { User } from 'src/app/auth/interfaces';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent {
  private _authService = inject(AuthService);

  public user = computed( () => this._authService.currentUser());

  onLogout(){
    this._authService.logout();
  }
}
