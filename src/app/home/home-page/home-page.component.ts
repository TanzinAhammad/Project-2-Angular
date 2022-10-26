import { Component, OnDestroy, OnInit } from '@angular/core';
import { FrinedService } from 'src/app/services/frined.service';
import { DataHolderService } from '../service/data-holder.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
  users:string[] = ['Imran','Anik','Rashed']
  data: any[] = []

  constructor(private service:DataHolderService) {
    
   }

  ngOnInit(): void {
    this.service.getData().subscribe((res)=>{this.data = res.entries})
  }

}
