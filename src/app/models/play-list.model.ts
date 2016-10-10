export class PlayList { 
    constructor(private _playList: Array<string>) {
        for (var i = 0; i < _playList.length; i++) {
            this._videos.push({ src : _playList[i] });
        }
    }

    private _videos: Array<{ src: string }> = [];    
    private _currentIndex: number = 0;

    public getDefault() { return this._videos[0]; }

    public getNext(): { src: string } {
        if (this._currentIndex < this._videos.length - 1) {
            this._currentIndex++;
        } else {
            this._currentIndex = 0;
        }
        return this._videos[this._currentIndex];
    }
}
