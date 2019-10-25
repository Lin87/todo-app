import { Component } from '@angular/core';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Todos';

  constructor( private faLibrary: FaIconLibrary) {
    faLibrary.addIcons(faGithub, faCheckSquare);
  }

}
