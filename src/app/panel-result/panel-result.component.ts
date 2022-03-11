import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs';
import { ApiServiceService } from '../api-service.service';
import { ChartDataset, ChartOptions,Color } from 'chart.js';
import { NgChartsModule  } from 'ng2-charts';
import { R3TargetBinder } from '@angular/compiler';
@Component({
  selector: 'app-panel-result',
  templateUrl: './panel-result.component.html',
  styleUrls: ['./panel-result.component.css']
})

export class PanelResultComponent implements OnInit {
  @ViewChild('myChart') chartrefi! :ElementRef
  constructor(private apis:ApiServiceService,private http:HttpClient) { }
  gelenveri:any=history.state.data;
  form:any=history.state.data2;
  lat:any=history.state.data3;
  long:any=history.state.data4;
  systemCost:any=history.state.data*100+2000;
  longg:any=[];
  total:any;
  gg!:any;
  systemCap:any=history.state.data*0.3;
  price:any=0.1042;
  loading=false;
  ngOnInit(): void {

    this.http.get<any>(`https://developer.nrel.gov/api/pvwatts/v6.json?api_key=5erEArJwNiDsaUOVeuLj2tv2aksPieXnchISHrBY&lat=${this.lat}&lon=${this.long}&system_capacity=${this.systemCap}&azimuth=180&tilt=40&array_type=1&module_type=1&losses=10`).pipe(pluck('outputs')).subscribe(data => {
      this.gg = data.ac_monthly;



for(let i=0;i<this.gg.length;i++){
  this.longg.push(Number(this.gg[i])*this.price)
}

this.loading=true
  })
console.log(this.total);

  this.getTotal(this.longg);
console.log(this.total);
this.systemCap=this.gelenveri*0.300
  }
  public barChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true,

   };

  public lineChartType='bar'
  public barChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public barChartType = 'line';
  public barChartLegend = true;

  public barChartData = [
    {data: this.longg, label: 'Income ($)'},

  ];
 pricing(){
   this.loading=false;
 this.longg= this.gg.map((per: number)=>{
return per*this.price
 })


 this.loading=true;
 this.barChartData = [
  {data: this.longg, label: 'Income ($)'}];
  this.getTotal(this.longg);
}
////
getTotal(arr:any[]){
  this.total=0;
  for(let i=0;i<arr.length;i++){
    this.total=this.total+arr[i];
  }

}
}
