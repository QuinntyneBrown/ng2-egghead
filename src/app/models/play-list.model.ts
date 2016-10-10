import { Video } from "./video.model";

export class PlayList { 
    constructor(private _playList: Array<string>) {
        for (var i = 0; i < _playList.length; i++) {
            this._videos.push(new Video(_playList[i]));
        }
    }
    public id: number;
    public _videos: Array<Video> = [];
    public videos: Array<Video>;
    public name: string;
    public currentIndex: number = 0;

    public getDefault() { return this._videos[0]; }

    public getNext(): Video {
        if (this.currentIndex < this._videos.length - 1) {
            this.currentIndex++;
        } else {
            this.currentIndex = 0;
        }
        return this._videos[this.currentIndex];
    }
}
