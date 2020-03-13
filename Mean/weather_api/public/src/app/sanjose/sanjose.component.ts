import { Component, OnInit,Input } from '@angular/core';
 import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {

  //@Input()
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
  });
  }
  goHome() {
    this._router.navigate(['/home']);
  }
}
