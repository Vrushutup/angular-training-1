import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'list-uni';

  name = 'Angular';

  handleClear(){
    this.name = ' ';
  }
}
