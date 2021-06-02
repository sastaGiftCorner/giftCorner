import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allData: any;
  totalRecords:number;
  page:number = 1;

  constructor(private _home:HomeService) { }

  ngOnInit(): void {
    this.getAllData()
  }
  getAllData(){
     this._home.getAll().subscribe(data=>{
      this.allData = data
    
     })
  }
}
