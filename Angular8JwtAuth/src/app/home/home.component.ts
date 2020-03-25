import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content: string;

  constructor(private data: DataService ) { }
  users:object;

  ngOnInit() {
    
    this.data.getEntreprise().subscribe(data => {
      this.users = data;
      console.log(this.users);
    }
    );
  }

}
