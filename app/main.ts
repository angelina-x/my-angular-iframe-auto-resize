import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { MyIFrameComponent } from "./my-iframe.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        MyIFrameComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);