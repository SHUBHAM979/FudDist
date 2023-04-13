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
    name : "Himadri Hostel(NIT Hamipur)",
    image: 'https://images.shiksha.com/mediadata/images/1550666050phpzCvMiP.png',
    donationInKg : "10",
    previousDonation : "200",
    lastDonation : "12/08/2022",
    contact : "01972 246123"  
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
