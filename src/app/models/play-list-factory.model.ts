import { PlayList } from "./play-list.model";

export class PlayListFactory { 
    static get(): PlayList {
        return new PlayList([
            "src/videos/01-egghead.mp4",
            "src/videos/02-egghead.mp4"
        ]);
    }
}
