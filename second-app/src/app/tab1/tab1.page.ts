import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private camera:Camera, private geolocation:Geolocation) {
    this.geolocation.getCurrentPosition().then(pos=> {
      this.position = pos.coords.longitude
    })
  }
  position:any
  takePicture() {
    this.camera.getPicture({encodingType:this.camera.EncodingType.JPEG}).then((image)=> {
      alert(image)
    })
  }
}
