import { Component, OnInit } from '@angular/core';
import { DataPageService } from '../../services/data-page.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public _dataPageService: DataPageService) { }

  ngOnInit() {
  }

}
