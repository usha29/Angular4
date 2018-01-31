import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ngx-tofa-personaldata',
  styleUrls: ['./tofa-personaldata.component.scss'],
  templateUrl: './tofa-personaldata.component.html',

})
export class TofaPersonaldataComponent {
  selectedweek:string;
  showSelected : boolean;
  week : string;
  constructor(){
        this.showSelected = false;
    }

 selectweek(event){
 this.selectedweek=event.value;
 console.log("selected week: "+this.selectedweek);
this.week = this.selectedweek;
 }
weekselected(){
  console.log("selected weeeeeeek: "+this.selectedweek);
  this.showSelected = true;
}

}
