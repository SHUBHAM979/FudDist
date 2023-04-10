import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class FaqsService {

  constructor() { }
  faqs=[
    {
      question:'WHAT WE ACTUALLY DO ?',
      answer:'We  identify waste, potential recipients, establish protocols, train staff, communicate with suppliers, and monitor and evaluate the system.',
      display:false
    },
    {
      question:'HOW WE DO IT ?',
      answer:'We connect to the people who are interested in donation and connect to them let a easy way through which the can implemnt it',
      display:false
    }
  ]
  getFaqs():any {
    return this.faqs;
  }
}
