import { SnapType } from './snap-type.type';

export class FaceSnap {
    id: string;

    constructor(
        public title: string,
        public description: string,
        public imageUrl: string,
        public creatingAt: Date,
        public snaps: number,
        public location?: string
    ) {
        this.id = crypto.randomUUID();
    }

    addSnap(): void {
        this.snaps++;
    }

    removeSnap(): void {
        this.snaps--;
    }

    snap(snapType: SnapType) {
        if (snapType === 'snap') {
            this.addSnap();
        } else if (snapType === 'unsnap') {
            this.removeSnap();
        }
    }
}
