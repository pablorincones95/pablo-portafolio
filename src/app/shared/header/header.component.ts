import { Component, OnInit } from '@angular/core';
import { DataPageService } from '../../services/data-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public _dataPageService: DataPageService, private router: Router) { }

  ngOnInit() {
  }

  searchProduct(text: string) {

    if ( text.length <= 1) {
      return;
    }

    this.router.navigate(['/buscar', text]);
  }

}
