import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from "./shared/components/loader/loader.component";
import { ChatComponent } from "./chat/chat.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, LoaderComponent, ChatComponent, HttpClientModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})

export class AppComponent {
  
}
