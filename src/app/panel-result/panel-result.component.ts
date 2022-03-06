import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-panel-result',
  templateUrl: './panel-result.component.html',
  styleUrls: ['./panel-result.component.css']
})
export class PanelResultComponent implements OnInit {

  constructor() { }
gelenveri:any=history.state.data;
form:any=history.state.data2;
  ngOnInit(): void {
  }
  returndata(){

return history.state.data;

  }
}
