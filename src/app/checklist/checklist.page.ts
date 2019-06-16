import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {Injectable} from '@angular/core';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {}
}

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.page.html',
  styleUrls: ['./checklist.page.scss'],
})
export class ChecklistPage implements OnInit {
  public dataPub;
  constructor(http: HttpClient) {
    http.get('https://curio-48c27.firebaseio.com/experiments.json')
        .subscribe(data => {
          console.log(data);
          this.dataPub = data[0];
        })
    console.log(this.dataPub);
  }
  ngOnInit() {}
}
