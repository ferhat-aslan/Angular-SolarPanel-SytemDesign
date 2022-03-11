import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {
  @Output() myCor: EventEmitter<any>=new EventEmitter();

  @ViewChild("placesRef")
  placesRef!: GooglePlaceDirective;
  userAddress: string = ''
  userLatitude: string = ''
  userLongitude: string = ''


  constructor() { }

  ngOnInit(): void {
  }
  handleAddressChange(address: any) {
    this.userAddress = address.formatted_address
    this.userLatitude = address.geometry.location.lat()
    this.userLongitude = address.geometry.location.lng()
    this.myCor.emit({lat:address.geometry.location.lat(),long:address.geometry.location.lng()});

  }



}
