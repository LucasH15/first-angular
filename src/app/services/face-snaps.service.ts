import { Injectable } from '@angular/core';

import { FaceSnap } from '../models/face-snap';
import { SnapType } from '../models/snap-type.type';
import faceSnapsData from '../datas/face-snaps.json';

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
    private faceSnaps: FaceSnap[] =
        faceSnapsData.map(faceSnap => {
            const { title, description, imageUrl, creatingAt, snaps, location} = faceSnap;
            return new FaceSnap(title, description, imageUrl, new Date(creatingAt), snaps, location || undefined);
        });

    getFaceSnaps(): FaceSnap[] {
        console.log(this.faceSnaps);
        return [...this.faceSnaps];
    }

    getFaceSnapById(faceSnapId: string): FaceSnap {
       const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);

       if (!foundFaceSnap) {
           throw new Error('No face snap found with id ' + faceSnapId);
       }

       return foundFaceSnap;
    }

    snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);

        faceSnap.snap(snapType);
    }
}
