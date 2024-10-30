import { Component } from '@angular/core';
import { MenuListComponent } from "../menu-list/menu-list.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MenuListComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  copyrightYear: number = 2024;
}
