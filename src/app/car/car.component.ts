import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']

})
export class CarComponent {
  carName : string = 'Ford';
  carYear = 2017;


getName()  {
  return this.carName;
}

}
