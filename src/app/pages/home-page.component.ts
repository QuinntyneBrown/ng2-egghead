import { Component, ChangeDetectionStrategy, Input, OnInit, ElementRef, AfterViewInit } from "@angular/core";

@Component({
    template: require("./home-page.component.html"),
    styles: [require("./home-page.component.scss")],
    selector: "home-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements AfterViewInit { 
    constructor(private _elementRef: ElementRef) { }

    ngAfterViewInit() { this.videoPlayer.onended = () => { this.videoPlayer.src = this.nextVideoSrc; } }
    
    public videoSrc: string = "src/videos/02-egghead.mp4";
    public nextVideoSrc: string = "src/videos/01-egghead.mp4";
    public get videoPlayer() { return this._elementRef.nativeElement.querySelector("video"); }
}
