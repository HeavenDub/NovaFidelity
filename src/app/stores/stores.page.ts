import { Component, OnInit,ViewChild,ElementRef} from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsMapTypeId,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';
import { ActionSheetController, Platform, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.page.html',
  styleUrls: ['./stores.page.scss'],
})

export class StoresPage  {
  map: GoogleMap;
  constructor(
    public alertController: AlertController,
    public actionCtrl: ActionSheetController,
    private platform: Platform
  ) {
    if (this.platform.is('cordova')) {
      this.loadMap();
    }
  }
  loadMap() {
    Environment.setEnv({
      API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyCBYNjRiZrIWllIjQ5HUWJX7nxnMr8nbGo',
      API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyCBYNjRiZrIWllIjQ5HUWJX7nxnMr8nbGo'
    });
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: 43.610769,
          lng: 3.876716
        },
        zoom: 12,
        tilt: 30
      }
    });
  }
}
