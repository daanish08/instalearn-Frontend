import { UpperCasePipe } from '@angular/common';
import { Component} from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [UpperCasePipe],
  template: `
  <div>
    <h1>About us</h1>
    <p>Pipes Demo {{randomTextsd}}</p>
    <p>Pipe Usage | {{randomTextsd | uppercase }}</p>
  </div>
    
  `,
  styles: ``
})
export class AboutComponent {
  randomTextsd="Hi ";

}
