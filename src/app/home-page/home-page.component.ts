import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import {AutoCompleteComponent } from '../auto-complete/auto-complete.component'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router:Router) { }
  flatti:any;
  angled:any;
  height:any=0;
  width:any=0;
  angle:Number=0;
  roofType:any;
  panelpiece:Number=0;
form:any={};
  ngOnInit(): void {
  }
  Router(){
    this.panelpiece=this.CalculatePanels();
    this.router.navigate(['/panelresult'],{state:{data:this.panelpiece,data2:this.form}});
    console.log(this.height);

  }
submitForm(formm:any){
this.form=formm.target.value;
console.log(formm);

}
  CalculatePanels(){
    let area:any=this.height*this.width*0.85;
    let panelPieces:any=Math.ceil(area/(1.5*1)) ;
    return panelPieces;
  }
}
