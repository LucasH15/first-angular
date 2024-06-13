import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';
import { faker } from '@faker-js/faker/locale/fr';
import { NgForOf } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        FaceSnapComponent,
        NgForOf
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    snaps!: FaceSnap[];

    ngOnInit(): void {
        this.snaps = [];
        for (let i = 0; i < 6; i++) {
            const faceSnap = new FaceSnap(
                faker.lorem.words({ min: 1, max: 5 }),
                faker.lorem.paragraph(),
                faker.image.url(),
                faker.date.anytime(),
                faker.number.int(200)
            );

            if (faker.datatype.boolean()) {
                faceSnap.setLocation(faker.location.city());
            }

            this.snaps[i] = faceSnap;
        }
    }
}
