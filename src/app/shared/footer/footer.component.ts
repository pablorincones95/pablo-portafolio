import { Component, OnInit } from '@angular/core';
import { DataPageService } from '../../services/data-page.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  year: number = new Date().getFullYear();
  constructor(public _dataPageService: DataPageService) { }

  ngOnInit() {
  }

}
