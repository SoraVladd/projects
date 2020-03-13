import { Component,OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'public';
  cities = [
    {name:'Seattle',id:5809844, view: 'https://images.pexels.com/photos/656195/pexels-photo-656195.jpeg'},
    {name:'San Jose',id:5392171, view: 'https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg'},
    {name:'Burbank',id:5331835, view: 'https://images.pexels.com/photos/3347244/pexels-photo-3347244.jpeg'},
    {name:'Dallas',id:4684904, view: 'https://images.pexels.com/photos/45182/dallas-texas-skyline-dusk-45182.jpeg'},
    {name:'Washington D.C.',id:4915545, view: 'https://images.pexels.com/photos/208686/pexels-photo-208686.jpeg'},
    {name:'Chicago',id:4887398, view: 'https://images.pexels.com/photos/1769376/pexels-photo-1769376.jpeg'}
  ]

  constructor(private _httpService: HttpService){}
  // ngOnInit will run when the component is initialized, after the constructor method.
  ngOnInit(){
    
    
  }
}
