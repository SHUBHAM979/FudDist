import { Component, OnInit } from '@angular/core';
import { faHeart} from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faSnapchat, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-fotter',
  templateUrl: './fotter.component.html',
  styleUrls: ['./fotter.component.css']
})
export class FotterComponent implements OnInit {
  fainst= faInstagram;
  fasnap = faSnapchat;
  faface = faFacebook;
  fatwi = faTwitter;
  faheart = faHeart;
  constructor() { }

  ngOnInit(): void {
  }

}
