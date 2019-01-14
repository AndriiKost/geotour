import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { GeoObjectService } from '../services/geo-object.service';
import { Subscription } from 'rxjs';
import { GeoObject } from '../model/geo-object';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit, OnDestroy {
  geoObjSub: Subscription;
  publicGeoObjects: GeoObject[];
  error: any;

  constructor(
    public authService: AuthService,
    public geoObjectService: GeoObjectService
  ) { }

  ngOnInit() {
    this.geoObjSub = this.geoObjectService
        .getPublicObjects()
        .subscribe(
          obj => this.publicGeoObjects = obj,
          err => this.error = err
        );
  }

  ngOnDestroy() {
    this.geoObjSub.unsubscribe();
  }

}
