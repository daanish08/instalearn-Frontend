import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoginService } from '../../../login/services/login.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css'],
})
export class MenuListComponent implements OnInit {
  menus$ = new BehaviorSubject<any[]>(this.getDefaultMenus());

  constructor(
    public loginService: LoginService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    // Update menus based on the current login state
    this.loginService.isLoggedIn$.subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        const isAdmin = this.loginService.auth.role === 'ADMIN';
        this.menus$.next(isAdmin ? this.getAdminMenus() : this.getUserMenus());
      } else {
        this.menus$.next(this.getDefaultMenus());
      }
    });
  }

  getDefaultMenus() {
    return [
      { title: 'Home', url: '/', exact: true },
      { title: 'Courses', url: '/courses' },
      { title: 'About', url: '/about' },
      { title: 'Contact', url: '/contact' },
      { title: 'Admin', url: 'login/admin' },
      { title: 'User', url: 'login/user' },
    ];
  }

  getAdminMenus() {
    return [
      { title: 'Home', url: '/' },
      { title: 'Dashboard', url: '/admin/dashboard' },
      { title: 'Users', url: '/admin/user-list' },
      { title: 'Profile', url: '/admin/profile' },
    ];
  }

  getUserMenus() {
    return [
      { title: 'Home', url: '/' },
      { title: 'Dashboard', url: '/user/dashboard' },
      { title: 'My Courses', url: '/user/courses' },
      { title: 'Profile', url: '/user/profile' },
    ];
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/']); // Optionally navigate to a different page after logout
  }
}
