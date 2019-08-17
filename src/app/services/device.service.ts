import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class DeviceService {

  deviceSubject = new Subject<any[]>();
  private devices = [];

  constructor(private httpClient: HttpClient){}

  emitDeviceSubject() {
    this.deviceSubject.next(this.devices.slice());
  }

  getDeviceById(id: number) {
    const device = this.devices.find(
      (deviceObject) => {
        return deviceObject.id === id;
      }
    );
    return device;
  }

  switchOnAll() {
    for (let device of this.devices) {
      device.status = 'On';
    }
    this.emitDeviceSubject();
  }

  switchOffAll() {
    for (let device of this.devices) {
      device.status = 'Off';
    }
    this.emitDeviceSubject();
  }

  switchOnOne(index: number) {
    this.devices[index].status = 'On';
    this.emitDeviceSubject();
  }

  switchOffOne(index: number) {
    this.devices[index].status = 'Off';
    this.emitDeviceSubject();
  }

  addDevice(name: string, status: string) {
    const deviceObject = {
      id: 0,
      name: '',
      status: '',
    };
    deviceObject.name = name;
    deviceObject.status = status;
    deviceObject.id = this.devices[(this.devices.length - 1)].id + 1;
    this.devices.push(deviceObject);
    this.emitDeviceSubject();
  }

  saveDeviceToServer(){
    this.httpClient
      .put('https://http-portfolio.firebaseio.com/devices.json', this.devices)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur de sauvegarde ! ' + error);
        }
      )
  }

  getDeviceFromServer() {
    this.httpClient
      .get<any[]>('https://http-portfolio.firebaseio.com/devices.json')
      .subscribe(
        (response) => {
          this.devices = response;
          this.emitDeviceSubject();
        },
        (error) => {
          console.log('Erreur de chargement ! ' + error);
        }
      )
  }
}
