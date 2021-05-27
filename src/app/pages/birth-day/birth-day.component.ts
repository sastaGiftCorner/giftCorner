import { Component, OnInit } from '@angular/core';
import { BirthDayService } from './birth-day.service';

@Component({
  selector: 'app-birth-day',
  templateUrl: './birth-day.component.html',
  styleUrls: ['./birth-day.component.css']
})
export class BirthDayComponent implements OnInit {
  allData: any;

  constructor(private _birthApi:BirthDayService) { }

  ngOnInit(): void {
    this.getAllBirth()
  }
  getAllBirth(){
  this._birthApi.getBirth().subscribe(res=>{
   this.allData= res
  })
  }
}
