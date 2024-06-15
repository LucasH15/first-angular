import { Component, Input } from '@angular/core';
import { NgStyle, TitleCasePipe } from '@angular/common';

import { FaceSnap } from '../models/face-snap';
import { Router } from '@angular/router';

@Component({
    selector: 'app-face-snap',
    standalone: true,
    imports: [
        NgStyle,
        TitleCasePipe
    ],
    templateUrl: './face-snap.component.html',
    styleUrl: './face-snap.component.scss',
    host: {
        '[class.face-snap-card]': 'true'
    }
})
export class FaceSnapComponent {
    @Input() faceSnap!: FaceSnap;

    constructor(private router: Router) {}

    onViewFaceSnap() {
        this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
    }
}
