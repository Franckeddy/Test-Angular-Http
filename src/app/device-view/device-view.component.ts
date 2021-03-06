import {Component, OnInit} from '@angular/core';
import {DeviceService} from '../services/device.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-device-view',
  templateUrl: './device-view.component.html',
  styleUrls: ['./device-view.component.sass']
})
export class DeviceViewComponent implements OnInit {
  isAuth = false;

  lastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    }
  );

  devices: any[];
  deviceSubscription: Subscription;

  constructor(private deviceService: DeviceService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit(): void {
    this.deviceSubscription = this.deviceService.deviceSubject.subscribe(
      (devices: any[]) => {
        this.devices = devices;
      });
    this.deviceService.emitDeviceSubject();
  }

  onTurnOn() {
    this.deviceService.switchOnAll();
  }

  onTurnOff() {
    this.deviceService.switchOffAll();
  }

  onSave() {
    this.deviceService.saveDeviceToServer();
  }

  onFetch() {
    this.deviceService.getDeviceFromServer();
  }
}
