import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { FahrenheitPipe } from '../fahrenheit.pipe';
import { MomentPipe } from '../moment.pipe';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        FahrenheitPipe,
        MomentPipe
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }