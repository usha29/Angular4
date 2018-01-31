import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss'],
  outputs:['onNewEntryAdded']
})
export class WeekComponent implements OnInit {


  // $scope.weekList = [];
  // 		$scope.defaultweek = "Test";
  // 		$scope.init = function() {
  // 			$rootScope.LoadingService = true;
  // 			// $scope.getData();
  //
  // 			// setting the week dropdown
  // 			var curr = new Date; // get current date
  // 			var firstday = new Date(curr.setDate(curr.getDate() - curr.getDay()));
  // 			var lastday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 6));
  // 			for ( var i = 0; i <= 10; i++) {
  // 				var weekStr = "[" + firstday.getDate() + "/" + (firstday.getMonth() + 1) + "/" + firstday.getFullYear() + " - " + lastday.getDate() + "/"
  // 						+ (lastday.getMonth() + 1) + "/" + lastday.getFullYear() + "]";
  // 				if (i == 0) {
  // 					$scope.defaultweek = weekStr;
  // 				}
  // 				$scope.weekList.push(weekStr);
  // 				firstday.setDate(firstday.getDate() - 7);
  // 				lastday.setDate(lastday.getDate() - 7);
  // 			}
  // 			console.log("Default Week  = " + $scope.defaultweek);
  // 			$rootScope.LoadingService = false;
  // 		};
  weekList:string[]=[];
  weekStr:string;
  defaultweek:string;
     curr: Date = new Date();
     firstday: Date = new Date();
     lastday: Date = new Date();
     selectedweek:'not yet selected';

     //@Output()
      public onNewEntryAdded = new EventEmitter();

  constructor() { }

  ngOnInit() {
  console.log("inside");
     this.firstday = new Date(this.curr.setDate(this.curr.getDate() - this.curr.getDay()));
     		this.lastday = new Date(this.curr.setDate(this.curr.getDate() - this.curr.getDay() + 6));
        console.log("firstday" + this.firstday);
        console.log("lastday" + this.lastday);
        for (let i = 0; i <=10 ; i++) {
          console.log(i);
          this.weekStr = "[" + this.firstday.getDate() + "/" + (this.firstday.getMonth() + 1) + "/" + this.firstday.getFullYear() + " - " + this.lastday.getDate() + "/"
              + (this.lastday.getMonth() + 1) + "/" + this.lastday.getFullYear() + "]";
              console.log(this.weekStr);
          if (i == 0) {
            this.defaultweek = this.weekStr;
          }
          console.log(this.defaultweek);
          console.log(typeof(this.weekStr));
        this.weekList.push(this.weekStr);
        this.firstday.setDate(this.firstday.getDate() - 7);
        this.lastday.setDate(this.lastday.getDate() - 7);
         }
//     			for (i = 0; i <= 10; i++) {
//      				weekStr = "[" + firstday.getDate() + "/" + (firstday.getMonth() + 1) + "/" + firstday.getFullYear() + " - " + lastday.getDate() + "/"
//      						+ (lastday.getMonth() + 1) + "/" + lastday.getFullYear() + "]";
//      				if (i == 0) {
//      					this.defaultweek = weekStr;
//      				}
//   this.weekList.push(weekStr);
//   firstday.setDate(firstday.getDate() - 7);
//   lastday.setDate(lastday.getDate() - 7);
// }
     console.log("Default Week  = " + this.defaultweek);
      console.log("Weeks ");
      console.log(this.weekList);
     for (let i = 0; i <=10 ; i++) {
       console.log(this.weekList[i]);
     }
}

selectweek(){
  console.log("selected week: "+this.selectedweek);
  this.onNewEntryAdded.emit({
   value: this.selectedweek
})
}

}
