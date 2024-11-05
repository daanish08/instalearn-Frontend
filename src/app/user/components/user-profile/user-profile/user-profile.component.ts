import { Component } from '@angular/core';
import { UserServiceService } from '../../../services/user-service/user-service.service';
import { LoginService } from '../../../../login/services/login.service';

interface UserProfile {
  userName: string;
  email: string;
  phone: string;
  password?: string; // Password is optional here; never display it directly
}
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  profile: UserProfile | undefined;

  id=1;

  constructor(private userService: UserServiceService,private loginService:LoginService) { }

  ngOnInit(): void {
    this.loadUserProfile(this.id);
    this.id=Number(this.loginService.auth.id);
  }

  loadUserProfile(id: number) { // Accept 'id' as a parameter
    this.userService.getUserName(id).subscribe((response:any)=>{
      this.profile=response;
      console.log(this.profile);
    });

}

editProfile(){

}
}
