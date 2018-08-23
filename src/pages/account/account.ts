import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserProvider} from '../../providers/user/user';



/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  data:any;
  viewName:any;
  userPW:any ={
    oldPassword:"",
    newPassword:""
    
  }
  

  constructor(public navCtrl: NavController, public navParams: NavParams,  public _user: UserProvider) {

    this.extRact();
   //this.passwordCH();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  viewTutorial(){
    this.navCtrl.push('TutorialPage')
  }

  logout(){
    this.navCtrl.push('LandingPage')
  }

extRact(){
  this.data = sessionStorage.getItem('userInfo')
  this.viewName = JSON.parse(this.data);
  console.log(this.viewName);
  console.log(this.viewName.userData.firstName)
}
 

  passwordCH(){
    this._user.changePW(this.viewName.userData.id,this.userPW.oldPassword,this.userPW.newPassword)
    .subscribe(( res:any ) =>{
      console.log("change",res)
       })

   }
}

