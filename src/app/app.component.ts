import { Component } from '@angular/core';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        HeaderComponent,
        FaceSnapListComponent,
        FooterComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {}
