import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-begin',
  templateUrl: './begin.page.html',
  styleUrls: ['./begin.page.scss'],
})
export class BeginPage implements OnInit {
  constructor(router: Router) {
    setTimeout(function() {
      router.navigate(['/areas'])
    }, 1500);
  }

  ngOnInit() {}
}
