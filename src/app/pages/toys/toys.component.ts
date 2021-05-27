import { Component, OnInit } from '@angular/core';
import { ToysService } from './toys.service';

@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.css']
})
export class ToysComponent implements OnInit {
  allData: any;

  constructor(private _toyApi:ToysService) { }

  ngOnInit(): void {
   this.getAllToys()
  }
  getAllToys(){
  this._toyApi.getToys().subscribe(res=>{
   this.allData = res
  })
  }
}
