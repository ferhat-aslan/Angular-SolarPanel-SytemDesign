import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { ComponentRestrictions } from 'ngx-google-places-autocomplete/objects/options/componentRestrictions';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { ApiServiceService } from '../api-service.service';
import {AutoCompleteComponent } from '../auto-complete/auto-complete.component'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router:Router,private apis:ApiServiceService) {

   }

  flat:any;
  angled:any;
  piece:number=1;
  height:any=0;
  width:any=0;
  angle:Number=0;
  roofType:any;
  panelpiece:Number=0;

  userAddress: string = ''
  userLatitude:any;
  userLongitude:any;
  veri:any;

form:any={};
  ngOnInit(): void {
  }
  Router(){
    this.panelpiece=this.CalculatePanels();

    this.router.navigate(['/panelresult'],{state:{data:this.panelpiece,data2:this.form,data3:this.userLatitude,data4:this.userLongitude}});
    console.log(this.height)
    console.log(this.userLatitude);
}
  valid():boolean{
    if(this.height>0 &&
      this.width>0 && (this.form=='angle' || this.form=='flat')){
        return false
      }
      else{
        return true;
      }
  }
submitForm(formm:any){
this.form=formm.target.value;
console.log(formm);

}
angleDisable(){
if(this.form=='angle'){
  return false;
}
else{
  return true;
}
}
  CalculatePanels(){
    let area:any=this.piece*this.height*this.width*0.85;
    let panelPieces:any=Math.ceil(area/(1.5*1)) ;
    return panelPieces;
  }
  handleAddressChange(address: any) {
    this.userAddress = address.formatted_address
    this.userLatitude = address.geometry.location.lat()
    this.userLongitude = address.geometry.location.lng()


  }
}
