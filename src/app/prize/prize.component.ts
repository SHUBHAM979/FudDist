import { Component, OnInit } from '@angular/core';

export interface prize {
  name : string;
  image : string;
  donationInKg : string;
  previousDonation : string;
  lastDonation : string;
  contact : string;
}


@Component({
  selector: 'app-prize',
  templateUrl: './prize.component.html',
  styleUrls: ['./prize.component.css']
})
export class PrizeComponent implements OnInit {
  prizes : prize[] = [ {
    name : "Sahil lagwal",
    image: 'https://c4.wallpaperflare.com/wallpaper/915/721/266/scarlett-johansson-black-widow-captain-america-civil-war-wallpaper-preview.jpg',
    donationInKg : "10",
    previousDonation : "200",
    lastDonation : "12/08/2022",
    contact : "1234567890"  
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
