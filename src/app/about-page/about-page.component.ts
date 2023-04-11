import { Component, OnInit } from '@angular/core';
import { faBriefcase, faDonate, faPlus, faTruckFast, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  fadonate = faDonate;
  fadriver = faTruckFast;
  fabrief = faBriefcase;
  fauser = faUser;
  faplus = faPlus;
  constructor() { }

  ngOnInit(): void {
  }

}
