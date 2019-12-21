import { UtilityService } from './../../services/utility.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-daftar',
  templateUrl: './daftar.page.html',
  styleUrls: ['./daftar.page.scss'],
})
export class DaftarPage implements OnInit {

  daftarForm:FormGroup;

  constructor(
    private fb: FormBuilder,
    private servis: UtilityService
  ) {
    this.daftarForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
   }

  ngOnInit() {
  }

  daftarBaru(dataSend){
    
    const frmData = new FormData();
    frmData.append('username', dataSend.username);
    frmData.append('password', dataSend.password);
    frmData.append('role', 'normal');

    this.servis.postData('user', frmData).then(
      sucRes => {
        console.log(sucRes);
        this.servis.presentToast(sucRes.message, 'text-center', 'warning');
      },
      erRes => {
        console.log(erRes);
        this.servis.presentToast(erRes.error.message, 'text-center', 'danger');
      }
    );
  }


}
