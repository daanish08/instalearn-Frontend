import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../../services/admin-service/admin-service.service';
import { UserServiceService } from '../../../../user/services/user-service/user-service.service';

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  password?: string; // Password is optional here; never display it directly
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  profile: UserProfile | undefined;

  id=1;

  constructor(private adminService: AdminServiceService) { }

  ngOnInit(): void {
    this.loadUserProfile(this.id);
  }


  loadUserProfile(id: number) { // Accept 'id' as a parameter
    this.adminService.getAdminById(id).subscribe((response:any)=>{
      this.profile=response;
      console.log(this.profile);
    });
  }

  
  

  editProfile(){
    console.log("Edit Profile clicked");

  }

}
