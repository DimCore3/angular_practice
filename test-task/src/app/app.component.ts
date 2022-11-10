import { Component } from '@angular/core';

export interface TestInterface {
  type: 'income' | 'outcome' | 'loan' | 'investment';
  _id: string;
  amount: number;
  name: { 
    first: string;
    last: string;
  },
  company: string;
  email: string;
  phone: string;
  address: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-task';
  
  arrayWithObj: TestInterface[] = [
    {
      type: 'income',
      _id: 'fdsf',
      amount: 421,
      name: { 
        first: 'fdsf',
        last: 'fdsf',
      },
      company:'fdsf',
      email: 'fdsf',
      phone: 'fdsf',
      address: 'fdsf',
    },
    {
      type: 'income',
      _id: 'fdsf',
      amount: 123,
      name: { 
        first: 'ffaaffds',
        last: '2eee',
      },
      company:'2fddd',
      email: 'fdsf',
      phone: 'fdsf',
      address: 'fdsf',
    },
  ]

  menuHidden:boolean = true;
  hideMenu(){
    this.menuHidden = !this.menuHidden;
  }
}
