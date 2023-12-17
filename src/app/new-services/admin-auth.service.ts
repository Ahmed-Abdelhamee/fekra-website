import { Injectable } from '@angular/core';
import { Auth, UserCredential, signInWithEmailAndPassword } from '@angular/fire/auth';
import { adminLogin } from '../admin/interfaces/adminLogin.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  constructor(private auth:Auth) { }

  login(user:any):Promise<UserCredential>{
    return signInWithEmailAndPassword(this.auth,user.email!,user.pass!)
  }
}
