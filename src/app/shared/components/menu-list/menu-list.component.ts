import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoginService } from '../../../login/services/login.service';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css'],
})
export class MenuListComponent implements OnInit {
  // BehaviorSubjects to track login and role state
  private isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private isAdmin$ = new BehaviorSubject<boolean>(false);

  // Observable for menus
  menus$ = new BehaviorSubject<any[]>(this.getDefaultMenus());

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.isLoggedIn$.next(!!this.loginService.auth.id);
    this.isAdmin$.next(this.loginService.auth.role === 'ADMIN');

    this.isLoggedIn$.subscribe((isLoggedIn) => {
      console.log('isLoggedIn', isLoggedIn);

      if (isLoggedIn) {
        const isAdmin = this.isAdmin$.getValue();
        this.menus$.next(isAdmin ? this.getAdminMenus() : this.getUserMenus());
        console.log('changing isLoggedIn');
      } else {
        this.menus$.next(this.getDefaultMenus());
        console.log('changing to default menu');
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
      { title: 'Logout', url: '/' }, // Add a logout option
    ];
  }

  getUserMenus() {
    return [
      { title: 'Home', url: '/' },
      { title: 'My Courses', url: '/user/courses' },
      { title: 'Profile', url: '/user/profile' },
      { title: 'Logout', url: '/' }, // Add a logout option
    ];
  }

  login(role: string) {
    this.isLoggedIn$.next(true);
    this.isAdmin$.next(role === 'admin');
  }

  logout() {
    localStorage.clear();
    this.loginService.logout();
    this.isLoggedIn$.next(false);
  }
}
