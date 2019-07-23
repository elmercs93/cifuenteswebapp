import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  constructor(public _authService:AuthService) { }

  ngOnInit() {
  }

  logOut(){
    this._authService.logOut();
  }

}
