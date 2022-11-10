import { Component, OnInit, Input } from '@angular/core';

import {TestInterface} from '../app.component';

@Component({
  selector: 'app-data-received',
  templateUrl: './data-received.component.html',
  styleUrls: ['./data-received.component.scss']
})
export class DataReceivedComponent implements OnInit {
  
  @Input() jsonElement: TestInterface;
  @Input() idx: number;

  ngOnInit(): void {
  }

}
