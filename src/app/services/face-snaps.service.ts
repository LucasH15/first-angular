import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { faker } from '@faker-js/faker/locale/fr';

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
    private faceSnaps: () => FaceSnap[] = () => {
        const snaps = [];
        for (let i = 0; i < 6; i++) {
            const faceSnap = new FaceSnap(
                faker.lorem.words({ min: 1, max: 5 }),
                faker.lorem.paragraph(),
                faker.image.url(),
                faker.date.past(),
                faker.number.int(200)
            );

            if (faker.datatype.boolean()) {
                faceSnap.setLocation(faker.location.city());
            }

            snaps.push(faceSnap);
        }

        return snaps;
    }

    getFaceSnaps(): FaceSnap[] {
        return [...this.faceSnaps()];
    }
}
