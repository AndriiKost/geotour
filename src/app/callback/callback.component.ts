import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.handleLoginCallback();
  }

}

// Once a user is authenticated, Auth0 will redirect back to our application and call the /callback route.
// Auth0 will also append the access token to this request, and our CallbackComponent will make sure
// to properly process and store the token and profile. If all is well, meaning we received an access
// token, we will be redirected back to the homepage and will be in a logged in state.
