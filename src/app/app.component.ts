import { Component } from '@angular/core';
import { faCoffee,faSyringe,faStar,faMapMarkerAlt,faClock,faAngleRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pruebaMax';
  faCoffee = faCoffee; 
  faSyringe = faSyringe;
  faStar = faStar;
  faMapMarkerAlt = faMapMarkerAlt;
  faClock = faClock;
  faAngleRight = faAngleRight;
}
