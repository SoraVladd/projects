import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  tempLow:any;
  tempAvg:any;
  tempHigh:any;
  humidity:any;
  status:any;
  degrees:any;
  faren:any;
  name:any;
  @Input()city;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    
  ) { }

  ngOnInit() {
    this._route.paramMap.subscribe(params => {
      console.log('*************',params.get('id','view'))
       this.id = params.get('id')
       this.view = params.get('view')
    this.getCity(this.id);
   return this.view;
    })
  }
  goHome() {
    this._router.navigate(['/']);
  }
  convertKelvin(degrees){
    this.faren = (degrees - 273.15)*(9/5) + 32;
    return Math.round(this.faren);
  }
  getCity(id) {
    let observable = this._httpService.getRealCity(id);
    observable.subscribe(data=> {
      console.log(data);
      this.tempAvg = this.convertKelvin(data["main"].temp);
      this.tempLow = this.convertKelvin(data["main"].temp_min);
      this.tempHigh = this.convertKelvin(data["main"].temp_max);
      this.humidity = data["main"].humidity;
      this.status = data["weather"][0].description;
      this.name = data["name"];
    })
  }
  getImage(view){
    this.view = view;
  }
}
