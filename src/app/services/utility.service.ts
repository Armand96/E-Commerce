import { Platform, ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  // =========================== ALL VARIABLE 
  public url:string = 'http://api.tes.borobudur.ac.id/ecom_back/api/';
  public Headers = {};

  constructor(
    private http: HttpClient,
    private platf: Platform,
    private toast: ToastController
  ) { }

  // ======================================== FUNCTION COLLECTION ========================================

  // ----- check landspace atau portrait
  public isLandscape(){
    return this.platf.isLandscape();
  }

  // ----- ambil data dengan metode GET
  public getData(url:string, data?:string) : any {

    if(data == null || data == undefined) data = '';
    return this.http.get(this.url+data).toPromise();

  }

  // ----- ambil data dengan metode POST
  public postData(url:string, dataparam:any) : any {

    return this.http.post(this.url+url, dataparam).toPromise();

  }

  // ----- Memunculkan Toast
  public async presentToast(msg:string, txtpos:string, clr?:string, dur?: number) {
    
    dur = (dur) ? dur : 2000;

    const toast = await this.toast.create({
      cssClass:txtpos,
      color: clr,
      position: 'bottom',
      message: msg,
      duration: dur
    });
    toast.present();
  }
  

}
