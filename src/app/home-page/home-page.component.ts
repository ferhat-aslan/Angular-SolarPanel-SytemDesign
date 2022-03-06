import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

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
  result:Number=0;
form:any={};
  ngOnInit(): void {
  }
  Router(){
    this.result=this.CalculatePanels();
    this.router.navigate(['/panelresult'],{state:{data:this.result,data2:this.form}});
    console.log(this.height);

  }
submitForm(formm:any){
this.form=formm.target.value;
console.log(formm);

}
  CalculatePanels(){
    let area:any=this.height*this.width*0.85;
    let panelPiece:any=Math.ceil(area/(1.5*1)) ;
    return panelPiece;
  }
}
