import { Component, OnInit } from '@angular/core';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vision-page',
  templateUrl: './vision-page.component.html',
  styleUrls: ['./vision-page.component.css']
})
export class VisionPageComponent implements OnInit {
  facircle = faCircle;
  constructor() { }

  ngOnInit(): void {
  }

}
