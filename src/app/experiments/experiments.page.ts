import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {Injectable} from '@angular/core';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {}
}

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.page.html',
  styleUrls: ['./experiments.page.scss'],
})
export class ExperimentsPage implements OnInit {
  public dataPub;
  constructor(http: HttpClient) {
    http.get('https://curio-48c27.firebaseio.com/experiments.json')
        .subscribe(data => {
          console.log(data);
          this.dataPub = data;
        })
    console.log(this.dataPub);
  }

  ngOnInit() {}
}
