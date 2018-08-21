import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultsPage } from '../../pages/results/results';
import { InputPage } from '../../pages/input/input';
import { ModalController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public _user: UserProvider) {
  }

  profileInformation:any;

  savedProfiles: any;

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
    this._user.getUserProfiles()
      .subscribe( (res: any) => {
          console.log("profiles for user ID", res)
          this.savedProfiles = res;
      })    
  }

  editInfo(){
    this.navCtrl.push('InputPage');
  }

  
  delete(userProfile){
    //need to set delete up
  }

  presentModal(id) {
    const modal = this.modalCtrl.create(ResultsPage);
    sessionStorage.setItem("profileId", id)
    modal.present();
  }
}
