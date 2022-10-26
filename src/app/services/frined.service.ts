import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FrinedService {
  friends: string[] = ["Imran Chowdhury","Miad Hasan","Rasheduzzaman","Anik"]

  constructor() { }

  getFreinds():string[]
  {
    return this.friends
  }

}
