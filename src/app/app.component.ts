import { Component ,OnInit } from '@angular/core';
import { AuthenticationService } from './service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular8-springboot-client';


  constructor(private loginService:AuthenticationService) { }

  ngOnInit() {

  }
}
