import { Injectable } from '@angular/core';

@Injectable()
export class Tofadatalist {

  Tofadata= [
  {"empName":"Ravi Durairaj",
  "empId":294847,
  "teamName":null,
  "totalTofaHrs":35.690000000000005,
  "totalWorkingDays":4,
  "totalLeaveDays":0,
  "totalAdjustHrs":0,
  "dayList":[
      {"tofaHrs":0,
      "dayType":"Week Off",
      "totalAdjustHrs":0,
      "totAdjHrsSub":0,
      "totAdjHrsApr":0,
      "totAdjHrsRej":0,
      "adjustMentList":[],
      "leaveStatus":null},
      {"tofaHrs":0,
      "dayType":"Holiday",
      "totalAdjustHrs":0,
      "totAdjHrsSub":0,
      "totAdjHrsApr":0,
      "totAdjHrsRej":0,
      "adjustMentList":[],
      "leaveStatus":null},
      {"tofaHrs":9.38,
      "dayType":"Working Day",
      "totalAdjustHrs":0,
      "totAdjHrsSub":0,
      "totAdjHrsApr":0,
      "totAdjHrsRej":0,
      "adjustMentList":[],
      "leaveStatus":null},
      {"tofaHrs":8.22,
      "dayType":"Working Day",
      "totalAdjustHrs":0,
      "totAdjHrsSub":0,
      "totAdjHrsApr":0,
      "totAdjHrsRej":0,
      "adjustMentList":[],
      "leaveStatus":null},
    {"tofaHrs":8.92,
    "dayType":"Working Day",
    "totalAdjustHrs":0,
    "totAdjHrsSub":0,
    "totAdjHrsApr":0,
    "totAdjHrsRej":0,
    "adjustMentList":[],
    "leaveStatus":null},
    {"tofaHrs":9.17,
    "dayType":"Working Day",
    "totalAdjustHrs":0,
    "totAdjHrsSub":0,
    "totAdjHrsApr":0,
    "totAdjHrsRej":0,
    "adjustMentList":[],
    "leaveStatus":null},
    {"tofaHrs":0,
    "dayType":"Week Off",
    "totalAdjustHrs":0,
    "totAdjHrsSub":4.7,
    "totAdjHrsApr":0,
    "totAdjHrsRej":0,
    "adjustMentList":[
      {"empId":0,
      "selected":false,
      "reason":"Worked on weekend",
      "reasonDescription":"Worked on weekend or holiday",
      "tofaTime":4.7,
      "title":"06/1/2018",
      "field":null,
      "adjustedHours":"4.7",
      "bgCol":null,
      "val":null,
      "status":"Submitted",
      "visible":false,
      "adjSeq":33402,
      "fileAttachment":null,
      "fileName":null,
      "actionVisible":true}],
      "leaveStatus":null}
    ]
    }
  ];

 Tofadata=[{
    "id":1,
    "name":"usha",
 }];

  getData() {
    return this.Tofadata;
  }


}
