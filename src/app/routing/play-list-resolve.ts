import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { PlayListFactory, PlayList } from "../models";

export class PlayListResolve implements Resolve<PlayList> {
    resolve(route: ActivatedRouteSnapshot) {
        return Observable.of(PlayListFactory.get());
    }
}