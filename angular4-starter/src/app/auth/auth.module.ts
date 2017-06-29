import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
    declarations: [
        SigninComponent,
        RegisterComponent,
        AuthComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        AuthRoutingModule
    ]
})
export class AuthModule {}