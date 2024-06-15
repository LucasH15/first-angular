import { Component, OnInit } from '@angular/core';
import { DatePipe, NgStyle, TitleCasePipe } from '@angular/common';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
    selector: 'app-single-face-snap',
    standalone: true,
    imports: [
        NgStyle,
        TitleCasePipe,
        DatePipe,
        RouterLink
    ],
    templateUrl: './single-face-snap.component.html',
    styleUrl: './single-face-snap.component.scss',
    host: {
        '[class.face-snap-card]': 'true',
        '[class.snapped]': 'hasSnaps'
    }
})
export class SingleFaceSnapComponent implements OnInit {
    faceSnap!: FaceSnap;
    hasSnaps!: boolean;
    buttonTxt!: string;

    constructor(
        private faceSnapsService: FaceSnapsService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this.prepareInterface();
        this.getFaceSnap();
    }

    onSnap(): void {
        if (this.hasSnaps) {
            this.unSnap();
        } else {
            this.snap();
        }
    }

    unSnap(): void {
        this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
        this.hasSnaps = false;
        this.buttonTxt = 'Oh Snap!';
    }

    snap(): void {
        this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
        this.hasSnaps = true;
        this.buttonTxt = 'Oups, unSnap!';
    }

    private getFaceSnap(): void {
        const faceSnapId = this.route.snapshot.params['id'];
        this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
    }

    private prepareInterface(): void {
        this.hasSnaps = false;
        this.buttonTxt = 'Oh Snap!';
    }
}
