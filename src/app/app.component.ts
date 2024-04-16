import { Component, ViewChild } from '@angular/core';
import { App } from '@capacitor/app';
import { IonRouterOutlet } from '@ionic/angular';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild(IonRouterOutlet) outlet: any;
  constructor(
    private platform:Platform
  ) {
    this.platform.backButton.subscribeWithPriority(-1,() => {
      if(!this.outlet?.canGoBack()){
        App.exitApp();
      }
    })
  }
}
