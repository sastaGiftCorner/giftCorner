import { Component, OnInit } from '@angular/core';
import { AdminDashbaordService } from '../admin-dashbaord.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  allData:any;
  constructor(private _apiDash:AdminDashbaordService) { }

  ngOnInit(): void {
    this.addUser()
  }

  addUser(){

    this._apiDash.addUser().subscribe(res => {
     this.allData = res
     console.log(this.allData)
    })
   
}

   
}
