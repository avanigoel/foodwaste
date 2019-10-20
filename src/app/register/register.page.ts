import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import {AlertController} from '@ionic/angular'
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string = ""
  password: string = ""
  cpassword: string = ""


  constructor(
    public afAuth: AngularFireAuth,
    public alert: AlertController,
    private router: Router
    ) { }

  ngOnInit() {
  }

  async register()
  {
    const {username , password , cpassword} = this
    if(password != cpassword)
    {
      //return console.error("Passwords don't match!!")
      this.showAlert("Error","Passwords don't match")
    }

    try{
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username +'@gmail.com' , password)
      this.showAlert("Success","Welcome aboard!!")
      console.log(res)
      this.router.navigate(['/home'])

    }catch(err)
    {
      console.dir(err)
      this.showAlert("Error",err.message)
    }
    
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
