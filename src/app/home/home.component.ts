import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allData: any;

  constructor(private _home:HomeService) { }

  ngOnInit(): void {
    this.getAllData()
  }
  getAllData(){
     this._home.getAll().subscribe(data=>{
      this.allData = data
      console.log(this.allData)
     })
  }
}
