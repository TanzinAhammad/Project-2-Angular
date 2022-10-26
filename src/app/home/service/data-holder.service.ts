import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHolderService {
  url = 'https://api.publicapis.org/entries'

  constructor(private httpClinet:HttpClient) { }

  getData():Observable<any>
  {
    return this.httpClinet.get(this.url)
  }
}
