import { Component } from '@angular/core';
import { UserServiceService } from '../../../services/user-service/user-service.service';

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

  id=2;

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.loadUserProfile(this.id);
  }

  loadUserProfile(id: number) { // Accept 'id' as a parameter
    this.userService.getUserById(id).subscribe((response:any)=>{
      this.profile=response;
      console.log(this.profile);
    });

}

editProfile(){

}
}
