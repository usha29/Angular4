import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tofa-data',
  templateUrl: './tofa-data.component.html',
  styleUrls: ['./tofa-data.component.scss']
})
export class TofaDataComponent implements OnInit {


 @Input() selectedweek: string;
  constructor() { }

  ngOnInit() {
    console.log(this.selectedweek);
  }

}
