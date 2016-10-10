
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { PlayListResolve } from "./play-list-resolve";

import {
	LandingPageComponent
} from "../pages";

export const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent,
        resolve: {
            playList: PlayListResolve
        }
    }
];

export const RoutingModule = RouterModule.forRoot([
    ...routes
]);

export const routedComponents = [
    LandingPageComponent
];

export const routingProviders = [
    PlayListResolve
];
