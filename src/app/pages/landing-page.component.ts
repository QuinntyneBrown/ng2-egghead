import { Component, ChangeDetectionStrategy, Input, OnInit, ElementRef, AfterViewInit } from "@angular/core";
import { PlayList } from "../models";
import { ActivatedRoute } from "@angular/router";

@Component({
    template: require("./landing-page.component.html"),
    styles: [require("./landing-page.component.scss")],
    selector: "landing-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent implements AfterViewInit, OnInit {
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _elementRef: ElementRef) {}

    ngOnInit() {
        this._playList = this._activatedRoute.snapshot.data['playList'];
        this.defaultVideo = this._playList.getDefault();  
    }

    ngAfterViewInit() {
        this.videoPlayer.onended = () => {
            this.videoPlayer.src = this._playList.getNext().src;            
        }
    }

    public currentIndex: number = 0;
    public defaultVideo: { src: string };
    public _playList: PlayList;
    public get videoPlayer() { return this._elementRef.nativeElement.querySelector("video"); }
}
