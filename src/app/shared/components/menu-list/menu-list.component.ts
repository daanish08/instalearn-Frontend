import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterModule],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.css'
})
export class MenuListComponent implements OnInit {
  menus$ = new BehaviorSubject<any[]>(this.getDefaultMenus()); // Use BehaviorSubject

  isLoggedIn = false; // Initially logged out
  isAdmin = false;   // Initially not an admin

  ngOnInit(): void {
      //Simulate login after 2 seconds for testing
      setTimeout(()=>{
        this.login('admin');
      }, 2000);
  }

  getDefaultMenus() {
    return [
      { title: "Home", url: "/", exact: true },
      { title: "Courses", url: "/courses" },
      { title: "About", url: "/about" },
      { title: "Contact", url: "/contact" },
      { title: "Admin", url: "login/admin" },
      { title: "User", url: "login/user" },
    ];
  }

  getAdminMenus() {
    return [
      { title: "Home", url: "/" },
      { title: "Dashboard", url: "/admin/dashboard" },
      { title: "Users", url: "/admin/user-list" },
      { title: "Profile", url: "/admin/profile" },
      { title: "Logout", url: "/" }, // Add a logout option
    ];
  }

  getUserMenus() {
    return [
      { title: "Home", url: "/" },
      { title: "My Courses", url: "/user/courses" },
      { title: "Profile", url: "/user/profile" },
      { title: "Logout", url: "/logout" }, // Add a logout option
    ];
  }

  login(role: string) {
    this.isLoggedIn = true;
    this.isAdmin = role === 'admin';
    this.updateMenus();
  }

  logout() {
    this.isLoggedIn = false;
    this.isAdmin = false;
    this.updateMenus();
  }

  updateMenus() {
    if (this.isLoggedIn) {
      this.menus$.next(this.isAdmin ? this.getAdminMenus() : this.getUserMenus());
    } else {
      this.menus$.next(this.getDefaultMenus());
    }
  }
}