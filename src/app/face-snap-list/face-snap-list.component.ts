import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';

import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [
      FaceSnapComponent,
      NgForOf
  ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss',
    host: {
      '[class.face-snap-container]': 'true',
    }
})
export class FaceSnapListComponent implements OnInit {
    snaps!: FaceSnap[];

    constructor(private faceSnapsService: FaceSnapsService) {}

    ngOnInit(): void {
        this.snaps = this.faceSnapsService.getFaceSnaps();
    }
}
