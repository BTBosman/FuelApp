import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Geolocation} from '@ionic-native/geolocation';
/// <reference path="types/MicrosoftMaps/CustomMapStyles.d.ts" />
/// <reference path="types/MicrosoftMaps/Microsoft.Maps.d.ts" />

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lat:any;
  lng:any;
  map:any;
  key: 'Ak4pAmbEtVFkBIRgzBTPVJiqS36d4VVhPXIvstTPNU4I_GiSLKRwoYbjb7tbEZnP'
  latLng:any;
  sdsDataSourceUrl = 'https://spatial.virtualearth.net/REST/v1/data/f22876ec257b474b82fe2ffcb8393150/NavteqNA/NavteqPOIs';
  constructor(public navCtrl: NavController,public geo:Geolocation,public plt:Platform) {

  }


  ionViewDidLoad(){
    this.loadMap();
  }

  loadMap(){
    
    this.geo.getCurrentPosition().then((position)=>{
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;

    var mapOptions = {
      credentials: this.key,
      center: new Microsoft.Maps.Location(position.coords.latitude,position.coords.longitude),
      zoom: 16
    };


    this.map = new Microsoft.Maps.Map(document.getElementById('myMap'),mapOptions)
    })
    
    var pushpin = new Microsoft.Maps.Pushpin(Map.apply(-26.2609829,27.9496687),{color:'red'});
      this.map.entities.push(pushpin)
    console.log(pushpin)
  }

//   getNearByLocations(){
//     this.map.entities.clear();

//     var queryOptions = {
//       queryUrl: this.sdsDataSourceUrl,
//       spatialFilter: {
//         spatialFilterType: 'nearby',
//         location: this.map.getCenter(),
//         radius: 25
//     },
//     //Filter to retrieve Gas Stations.
//     filter: new Microsoft.Maps.SpatialDataService.Filter('EntityTypeID','eq',5540) 
// };

// }

}

