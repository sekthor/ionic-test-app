import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  text = "Hello";

  constructor(public toastController: ToastController) {}

  onChangeText(): void {
    this.text = "Bye";
    this.presentSuccessfulToast("Text sucessfully changed", 2000);

  }

  async presentSuccessfulToast(message: string, length: number) {
    const toast = await this.toastController.create({
      message: message,
      duration: length
    })
    toast.present();
  }

}
