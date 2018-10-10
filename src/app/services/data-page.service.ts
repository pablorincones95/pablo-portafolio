import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataPage } from '../interfaces/data-page.interface';

@Injectable({
  providedIn: 'root'
})
export class DataPageService {

  data: DataPage = {};
  charged = false;
  team: any[] = [];

  constructor(private http: HttpClient) {
    this.getData();
    this.getTeam();
  }

  private getData() {
    this.http.get('assets/data/data-page.json').subscribe((resp: DataPage) => {
      this.charged = true;
      this.data = resp;
    });
  }

  private getTeam() {
    this.http.get('https://pablo-portafolio.firebaseio.com/team.json').subscribe((resp: any[]) => {
      this.charged = true;
      this.team = resp;
      console.log(resp);
    });
  }
}
