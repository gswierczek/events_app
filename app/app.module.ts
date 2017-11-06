import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {EventsAppComponent} from './events-app.component';
import {NavBarComponent} from './nav/navbar.component';
import {ToastrService} from './common/toastr.service';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {Error404Component} from './errors/404.component';

import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver,
    DurationPipe
} from './events/index'
import {AuthService} from './user/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CreateSessionComponent} from './events/event-details/create-session.component';
import {SessionListComponent} from './events/event-details/session-list.component';
import {CollapsibleWellComponent} from './common/collapsible-well.component';
import {JQ_TOKEN} from './common/index';
import {SimpleModalComponent} from './common/simple-modal.component';
import {ModalTriggerDirective} from './common/modal-trigger.directive';
import {UpvoteComponent} from './events/event-details/upvote.component';

declare let jQuery : Object;

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent, EventsListComponent, EventThumbnailComponent, NavBarComponent, EventDetailsComponent,
        CreateEventComponent, Error404Component, CreateSessionComponent, SessionListComponent, CollapsibleWellComponent, DurationPipe,
        SimpleModalComponent, ModalTriggerDirective, UpvoteComponent
    ],
    bootstrap: [EventsAppComponent],
    providers: [
        EventService,
        ToastrService,
        EventRouteActivator,
        { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState},
        EventListResolver,
        AuthService,
        { provide: JQ_TOKEN, useValue: jQuery}
    ]
})
export class AppModule {


}

function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty) {
        return window.confirm('You have not saved your changes')
    } else {
        return true
    }
}
