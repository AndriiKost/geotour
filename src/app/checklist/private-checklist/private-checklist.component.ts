import { Component, OnInit, OnDestroy } from '@angular/core';
import { GeoObject } from 'src/app/model/geo-object';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';
import { GeoObjectService } from 'src/app/services/geo-object.service';

@Component({
  selector: 'app-private-checklist',
  templateUrl: './private-checklist.component.html',
  styleUrls: ['./private-checklist.component.css']
})
export class PrivateChecklistComponent implements OnInit, OnDestroy {
  privateGeoObjects: GeoObject[];
  error: any;
  geoObjSub: Subscription;

  constructor(
    private authService: AuthService,
    public geoObjectService: GeoObjectService
    ) { }

  ngOnInit() {
    this.geoObjSub = this.geoObjectService
    .getPrivateObjects()
    .subscribe(
      obj => this.privateGeoObjects = obj,
      err => this.error = err
    );
  }

  ngOnDestroy() {
    this.geoObjSub.unsubscribe();
  }

}
