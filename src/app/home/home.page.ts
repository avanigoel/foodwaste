import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import {AlertController} from '@ionic/angular'
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    username: string = ""
    password: string = ""
    

    constructor(
        public router: Router,
        public afAuth: AngularFireAuth,
        public alert: AlertController,
        public navCtrl: NavController
        ) {
    }
    
    ngOnInit() {
          
}

    async login()
    {
        const {username,password} = this
        try{

            const res =  await this.afAuth.auth.signInWithEmailAndPassword(username +'@gmail.com' , password)
            this.router.navigate(['/feed'])
        }catch(err)
        {
            console.dir(err)
            
            if(err.code == "auth/user-not-found")
            {
                console.log("User not found!!")
                this.showAlert("Error","User not found!!")
            }
            else{
                this.showAlert("Error",err.message)
            }
        }
        
    }

    register()
    {
        console.log("calling register");
        this.router.navigate(['/register'])
        //this.navCtrl.push()
    }

    async showAlert(header:string, message: string)
    {
    const alert = await this.alert.create(
      {
        header,
        message,
        buttons: ["OK"]
      }
    )

    await alert.present()

    
    }
}