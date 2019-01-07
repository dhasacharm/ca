import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.css']
})
export class DashboradComponent implements OnInit {

  flag=[];
  cleared=[]
  removedanswer=[]
  blockuser=[]
  constructor() { }

  ngOnInit() {
  }

  handlesubmit(xlform){
    console.log(xlform.value)
  }

}
