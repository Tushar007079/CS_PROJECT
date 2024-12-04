import { Injectable } from '@angular/core';
import { AppID } from 'ibmcloud-appid-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  appID: AppID;

  constructor() {
    // Initialize IBM App ID with your Client ID and OAuth URL
    this.appID = new AppID({
      clientId: 'YOUR_CLIENT_ID',  // Replace with your IBM App ID client ID
      discoveryEndpoint: 'YOUR_OAUTH_URL',  // Replace with your OAuth URL from App ID
    });
  }

  // Method for logging in
  login() {
    this.appID.login()
      .then((authenticated) => {
        if (authenticated) {
          console.log('Logged in successfully');
        }
      })
      .catch((error) => {
        console.error('Error logging in:', error);
      });
  }

  // Method for logging out
  logout() {
    this.appID.logout();
  }

  // Check if the user is authenticated
  isAuthenticated() {
    return this.appID.isAuthenticated();
  }

  // Get the user's identity
  getUserIdentity() {
    return this.appID.getUserInfo();
  }
}
