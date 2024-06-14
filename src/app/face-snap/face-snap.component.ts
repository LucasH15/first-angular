import { Component, Input, OnInit } from '@angular/core';
import { DatePipe, NgStyle, TitleCasePipe } from '@angular/common';
import { FaceSnap } from '../models/face-snap';

@Component({
    selector: 'app-face-snap',
    standalone: true,
    imports: [
        NgStyle,
        TitleCasePipe,
        DatePipe
    ],
    templateUrl: './face-snap.component.html',
    styleUrl: './face-snap.component.scss',
    host: {
        '[class.face-snap-card]': 'true',
        '[class.snapped]': 'hasSnaps'
    }
})
export class FaceSnapComponent implements OnInit {
    @Input() faceSnap!: FaceSnap;

    hasSnaps!: boolean;
    buttonTxt!: string;

    ngOnInit(): void {
        this.hasSnaps = false;
        this.buttonTxt = 'Oh Snap!';
    }

    onSnap(): void {
        if (this.hasSnaps) {
            this.unSnap();
        } else {
            this.snap();
        }
    }

    unSnap(): void {
        this.faceSnap.removeSnap();
        this.hasSnaps = false;
        this.buttonTxt = 'Oh Snap!';
    }

    snap(): void {
        this.faceSnap.addSnap();
        this.hasSnaps = true;
        this.buttonTxt = 'Oups, unSnap!';
    }
}
