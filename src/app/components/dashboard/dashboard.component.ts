import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  opened = true;

  constructor(private router: Router) { }

  paraFuncionarios() {
    this.router.navigate(['usuarios']);
  }

  paraHome(){
    this.router.navigate(['']);
  }
}
