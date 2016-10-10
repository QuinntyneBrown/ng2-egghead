import { Component, ChangeDetectionStrategy, Input, OnInit, ElementRef, AfterViewInit } from "@angular/core";
import { Video, PlayList } from "../models";

@Component({
    template: require("./landing-page.component.html"),
    styles: [require("./landing-page.component.scss")],
    selector: "landing-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent implements AfterViewInit {
    constructor(private _elementRef: ElementRef) {        
        this._playList = new PlayList([
            "src/videos/01-egghead.mp4",
            "src/videos/02-egghead.mp4"
        ]);        
        this.currentVideo = this._playList.getDefault();        
    }

    ngAfterViewInit() {
        this.videoPlayer.onended = () => {
            this.videoPlayer.src = this._playList.getNext().src;            
        }
    }

    public currentIndex: number = 0;
    public currentVideo: Video;
    public _playList: PlayList;
    public get videoPlayer() { return this._elementRef.nativeElement.querySelector("video"); }
}
