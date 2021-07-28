import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-my-ojt',
  templateUrl: './my-ojt.page.html',
  styleUrls: ['./my-ojt.page.scss'],
})
export class MyOJTPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  myojt(){
    this.router.navigate(['/my-ojt']);
  }
  logMeIn(){
    this.router.navigate(['/login']);
  }


}


