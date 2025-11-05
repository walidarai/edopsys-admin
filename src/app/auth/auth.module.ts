import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { PasswordSetComponent } from './password-set/password-set.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { SsoExternalComponent } from './sso-external/sso-external.component';
import { RedirectAuthComponent } from './redirect-auth/redirect-auth.component';
import { BasicLoginComponent } from './login/basic-login/basic-login.component';
import { GoogleLoginComponent } from './login/google-login/google-login.component';
import { MicrosoftLoginButtonComponent } from './login/microsoft-login-button/microsoft-login-button.component';
import { GoogleLoginButtonComponent } from './login/google-login-button/google-login-button.component';


@NgModule({
  declarations: [
    AuthComponent,

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,LoginComponent,
    PasswordSetComponent,
    PasswordResetComponent,
    SsoExternalComponent,
    RedirectAuthComponent,
    BasicLoginComponent,
    GoogleLoginComponent,
    MicrosoftLoginButtonComponent,
    GoogleLoginButtonComponent
  ]
})
export class AuthModule { }
